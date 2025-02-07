import { createReducer, on } from '@ngrx/store';
import { UserState } from '../../users/store/user.state';
import { LoginActions, LogoutAction, RegisterActions, UpdateAuthUserAction } from './auth.actions';
import { AuthState } from './auth.state';

export const AUTH_FEATURE_KEY = 'auth';
export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: UserState;
}

export const initialState: AuthState = {
  isLoading: false,
  error: '',
  hasError: false,
  authUser: undefined,
  isLoggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  // on send request to register
  on(
    RegisterActions.request,
    (state): AuthState => ({
      ...state,
      isLoading: true,
      hasError: false,
    })
  ),
  on(
    RegisterActions.failure,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      hasError: true,
      error: action.err,
    })
  ),

  on(
    RegisterActions.success,
    (state): AuthState => ({
      ...state,
      isLoading: false,
      hasError: false,
    })
  ),

  // Login Reducers
  on(
    LoginActions.request,
    (state): AuthState => ({
      ...state,
      isLoading: true,
      hasError: false,
    })
  ),
  on(
    LoginActions.failure,
    (state, {error}): AuthState => ({
      ...state,
      isLoading: false,
      hasError: true,
      error,
    })
  ),
  
  on(
    LoginActions.success,
    (state, {authUser}): AuthState => ({
      ...state,
      isLoading: false,
      authUser: authUser,
      isLoggedIn: true,
    })
  ),

  on(
    LogoutAction,
    (): AuthState => ({
      ...initialState
    })
  ),
  // On Update AuthUser State after user update his profile.
  on(
    UpdateAuthUserAction,
    (state , {user}): AuthState => ({
      ...state,
      authUser : user
    })
  )

);
