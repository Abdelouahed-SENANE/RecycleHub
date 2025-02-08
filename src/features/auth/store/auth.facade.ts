import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as AuthSelectors from "./auth.selectors"
import { User } from "../../../models/models";
import { LoginActions, LogoutAction, RegisterActions } from "../../auth/store/auth.actions";
import { AuthRequest } from '../../../models';



@Injectable({
    providedIn : 'root'
})
export class AuthFacade {
    private readonly store : Store = inject(Store)

    readonly authUser$ = this.store.select(AuthSelectors.authUserQuery) 
    readonly isLoggedIn$ = this.store.select(AuthSelectors.isLoggedInQuery) 
    readonly isLoading$ = this.store.select(AuthSelectors.isLoadingQuery) 
    readonly error$ = this.store.select(AuthSelectors.errorQuery) 
    readonly hasError$ = this.store.select(AuthSelectors.hasErrorQuery) 

    register(user : User) : void {     
        this.store.dispatch(RegisterActions.request({user : user}))
    }

    login(credentiels : AuthRequest) : void {     
        this.store.dispatch(LoginActions.request({credentiels : credentiels}))
    }

    logout() : void {
        this.store.dispatch(LogoutAction())
    }

}