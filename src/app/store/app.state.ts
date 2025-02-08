import { AuthState } from "../../features/auth/store/auth.state";
import { CollectionState } from "../../features/collections/store/collection.state";
import { UserState } from "../../features/users/store/user.state";


export interface AppState {
    user : UserState
    auth : AuthState
    collection : CollectionState
}