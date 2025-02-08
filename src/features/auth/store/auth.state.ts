import { User } from '../../../models';

export interface AuthState {
  isLoggedIn: boolean;
  authUser?: User;
  isLoading: boolean;
  hasError: boolean;
  error: String;
}

export const initialState: AuthState = {
  isLoading: false,
  error: '',
  hasError: false,
  authUser: undefined,
  isLoggedIn: false,
};
