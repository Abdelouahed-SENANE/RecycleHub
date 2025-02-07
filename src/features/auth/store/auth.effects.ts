import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../api/auth.service';
import { LoginActions, LogoutAction, RegisterActions, UpdateAuthUserAction } from './auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { User } from '../../../models/user.model';
import { AuthRequest } from '../../../models/auth.model';

@Injectable()
export class AuthEffects {
  private readonly router: Router = inject(Router);
  private readonly actions$: Actions = inject(Actions);
  private readonly authService: AuthService = inject(AuthService);

  readonly register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterActions.request),
      exhaustMap(({ user }) =>
        this.authService.register(user).pipe(
          map((res) => {
            console.log('Registration successful:', res);
            return RegisterActions.success({
              success: 'User registered successfully.',
            });
          }),
          catchError((error) => {
            console.error('Registration failed:', error);
            return of(RegisterActions.failure({ err: error }));
          })
        )
      )
    )
  );

  readonly onRegisterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RegisterActions.success),
        map(() => {
          this.router.navigate(['/auth/login']);
        })
      ),
    { dispatch: false }
  );

  readonly login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.request),
      exhaustMap(({ credentiels }) =>
        this.authService.login(credentiels).pipe(
          map((res: any) => {
            if (res && res.success) {
              return LoginActions.success({ authUser: res?.user });
            } else {
              return LoginActions.failure({ error: res?.message });
            }
          }),
          catchError((error) => {
            console.error('Login failed:', error);
            return of(
              LoginActions.failure({ error: 'An unexpected error occurred' })
            );
          })
        )
      )
    )
  );

  readonly onLoginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.success),
        map(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );



  readonly logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LogoutAction),
        exhaustMap(() => {
          this.router.navigate(['/auth/login']);
          return [];
        })
      ),
    { dispatch: false }
  );
}
