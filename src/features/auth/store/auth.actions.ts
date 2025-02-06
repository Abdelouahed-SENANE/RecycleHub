import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthRequest } from '../../../models/auth.model';
import { User } from '../../../models/user.model';

// Register Actions
export const RegisterActions = createActionGroup({
  source: 'Auth: Register',
  events: {
    request: props<{user : User}>(),
    success: props<{success : String}>(),
    failure: props<{err : String}>(),
  },
});

// Login Actions
export const LoginActions = createActionGroup({
  source: 'Auth: Login',
  events: {
    request: props<{credentiels : AuthRequest}>(),
    success: props<{authUser : User}>(),
    failure: props<{ error : string}>(),
  },
});

// Logout Actions
export const LogoutAction = createAction('Auth: Logout')
