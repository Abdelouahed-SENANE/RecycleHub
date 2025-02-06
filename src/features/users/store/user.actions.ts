import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthRequest } from '../../../models/auth.model';
import { User } from '../../../models/user.model';

// // Check email Actions
// export const CheckEmailActions = createActionGroup({
//   source: 'User: Check Email',
//   events: {
//     request: props<{email : string}>(),
//     success: props<{existByEmail : boolean}>(),
//     failure: props<{error : string}>(),
//   },
// });
