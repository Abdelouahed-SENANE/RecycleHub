import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { userReducer } from "../../features/users/store/user.reducers";
import { authReducer } from "../../features/auth/store/auth.reducers";
import { collectionReducer } from "../../features/collections/store/collection.reducers";


export const reducers: ActionReducerMap<AppState> = {
    user : userReducer,
    auth : authReducer,
    collection : collectionReducer
}