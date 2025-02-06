import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../api/users.service';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable({
  providedIn  : 'root'
})
export class UserEffects {
  private readonly router: Router = inject(Router);
  private readonly actions$: Actions = inject(Actions);
  private readonly userService: UserService = inject(UserService);

  // readonly existByEmail$ = createEffect(() => 
  //   this.actions$.pipe(
  //     ofType(CheckEmailActions.request),
  //     exhaustMap(({email}) => 
  //     this.userService.existByEmail(email).pipe(
  //       map((isExist) => {
  //         return CheckEmailActions.success({existByEmail : isExist})
  //       }),
  //       catchError((error) => {          
  //         return of(CheckEmailActions.failure({error : error}))
  //       })
  //     )
  //     )
  //   )
  // )


  
}
