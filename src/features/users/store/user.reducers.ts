import { createReducer, on } from '@ngrx/store';
import { initialState, UserState } from './user.state';
import { DeleteUserActions, UpdateProfileActions } from './user.actions';

export const USER_FEATURE_KEY = 'user';
export interface AuthPartialState {
  readonly [USER_FEATURE_KEY]: UserState;
}



export const userReducer = createReducer(
  initialState,

  // on Update User profile request
  on(
    UpdateProfileActions.request,
    (state) : UserState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    UpdateProfileActions.success,
    (state , action) : UserState => ({
      ...state,
      isLoading: false,
      success : action.success
    })
  ),
  on(
    UpdateProfileActions.failure,
    (state , action) : UserState => ({
      ...state,
      isLoading: false,
      error : action.error
    })
  ),
  on(
    DeleteUserActions.request,
    (state) : UserState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    DeleteUserActions.success,
    (state , action) : UserState => ({
      ...state,
      isLoading: false,
      success : action.success
    })
  ),
  on(
    DeleteUserActions.failure,
    (state , action) : UserState => ({
      ...state,
      isLoading: false,
      error : action.error
    })
  )

)

