import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';

export const USER_FEATURE_KEY = 'user';
export interface AuthPartialState {
  readonly [USER_FEATURE_KEY]: UserState;
}

export const initialState: UserState = {
  isLoading: false,
  error: '',
  users: [],
};

export const userReducer = createReducer(
  initialState,

  // on check email is exist

)

