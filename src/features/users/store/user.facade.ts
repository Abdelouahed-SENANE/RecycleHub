import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserSelectors from './user.selectors';
import { User } from '../../../models/models';
import {
  DeleteUserActions,
  EditUserActions,
  UpdateProfileActions,
} from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  private readonly store: Store = inject(Store);

  readonly users$ = this.store.select(UserSelectors.usersQuery);
  readonly isLoading$ = this.store.select(UserSelectors.isLoadingQuery);
  readonly error$ = this.store.select(UserSelectors.errorQuery);
  readonly success$ = this.store.select(UserSelectors.successQuery);

  updateProfile(user: User): void {
    this.store.dispatch(UpdateProfileActions.request({ user }));
  }

  editUser(user: User): void {
    this.store.dispatch(EditUserActions.request({ user }));
  }

  deleteAccount(userId: string): void {
    this.store.dispatch(DeleteUserActions.request({ userId }));
  }
}
