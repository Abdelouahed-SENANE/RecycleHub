import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../api/users.service';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { DeleteUserActions, UpdateProfileActions } from './user.actions';
import {
  LoginActions,
  LogoutAction,
  UpdateAuthUserAction,
} from '../../auth/store/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  private readonly router: Router = inject(Router);
  private readonly actions$: Actions = inject(Actions);
  private readonly userService: UserService = inject(UserService);

  readonly updateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateProfileActions.request),
      exhaustMap(({ user }) =>
        this.userService.updateProfile(user).pipe(
          map((isUpdated) => {
            if (isUpdated) {
              return UpdateProfileActions.success({
                success: 'Profile updated successfully.',
                user: user,
              });
            } else {
              return UpdateProfileActions.failure({
                error: 'Cannot update profile',
              });
            }
          }),
          catchError((error) => {
            console.error(error);
            return of(
              UpdateProfileActions.failure({
                error: 'An error occurred',
              })
            );
          })
        )
      )
    )
  );

  readonly onUpdateProfileSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateProfileActions.success),
      map((action) => {
        return UpdateAuthUserAction({ user: action.user });
      })
    )
  );

  readonly deleteAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteUserActions.request),
      exhaustMap(({ userId }) => {
        return this.userService.deleteUser(userId).pipe(
          map((isDeleted) => {
            if (isDeleted) {
              return DeleteUserActions.success({ success: "Account deleted successfully." });
            } else {
              return DeleteUserActions.success({ success: "Failed to delete account." });
            }
          }),
          catchError((err) => {
            console.error(err);
            return of(
              DeleteUserActions.failure({ error: 'An error occurred' })
            );
          })
        );
      })
    )
  );

  readonly onDeleteAccoutSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteUserActions.success),
      map(() => {
        return LogoutAction();
      })
    )
  );
}
