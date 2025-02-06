import { AuthState } from "../../features/auth/store/auth.state";
import { UserState } from "../../features/users/store/user.state";


export interface AppState {
    user : UserState
    auth : AuthState
}