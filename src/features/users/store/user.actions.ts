import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../../models/user.model';

// Update profile Actions
export const UpdateProfileActions = createActionGroup({
  source: 'User: Update Profile',
  events: {
    request: props<{user : User}>(),
    success: props<{success : string , user : User}>(),
    failure: props<{error : string}>(),
  },
});

// Update profile Actions
export const DeleteUserActions = createActionGroup({
  source: 'User: Delete Account',
  events: {
    request: props<{userId : string}>(),
    success: props<{success : string }>(),
    failure: props<{error : string}>(),
  },
});
