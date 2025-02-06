import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as UserSelectors from "./user.selectors"
import { User } from "../../../models/user.model";
import { RegisterActions } from "../../auth/store/auth.actions";



@Injectable({
    providedIn : 'root'
})
export class UserFacade {
    private readonly store : Store = inject(Store)

    readonly usersQuery$ = this.store.select(UserSelectors.usersQuery) 
    readonly isLoadingQuery$ = this.store.select(UserSelectors.isLoadingQuery) 
    readonly errorQuery$ = this.store.select(UserSelectors.errorQuery) 


}