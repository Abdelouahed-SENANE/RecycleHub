import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { AuthFacade } from "../store/auth.facade";
import { map, take } from "rxjs";


export const authGuard = (route : ActivatedRouteSnapshot , state : RouterStateSnapshot) => {
    const authFacade : AuthFacade = inject(AuthFacade)

    return authFacade.isLoggedIn$.pipe(
        take(1),
        map(isLoggedIn => isLoggedIn ? true : createUrlTreeFromSnapshot(route, ['auth/login'], {returnUrl : state.url} ))
    )
}

