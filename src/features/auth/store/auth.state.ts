import { User } from "../../../models/user.model";

export interface AuthState {
    isLoggedIn : boolean,
    authUser? : User,
    isLoading : boolean,
    hasError : boolean,
    error : String
}
