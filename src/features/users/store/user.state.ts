import { User } from "../../../models/user.model";


export interface UserState {
    isLoading : boolean,
    error : String,
    users : User[],
}