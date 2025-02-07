import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '../../../core/local-storage.service';
import { User } from '../../../models/user.model';
import { catchError, map, Observable, of } from 'rxjs';
import { UserService } from '../../users/api/users.service';
import { AuthRequest } from '../../../models/auth.model';
import { environnemt } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userService : UserService = inject(UserService)
  private readonly http : HttpClient = inject(HttpClient)

  login(credentiels : AuthRequest): Observable<any> {
    const url = `${environnemt.apiUrl}users?email=${encodeURIComponent(credentiels.email)}`
    return this.http.get<User[]>(url).pipe(
      map((users) => {
        if (users.length === 0) {
          return {success : false , message : "Invalid credentiels."}
        }
        const user = users[0]
        if (user.password === credentiels.password) {
          return {success : true , user}
        }else {
          console.log({success : false , message : "Invalid credentiels."});
          return {success : false , message : "Invalid credentiels."}
        }
      }),
      catchError((err) => {
        console.error("Error fetching " + err);
        return [{success : false , message : "An error occurred"}]
      })
    )

  }

  register(user : User)  {
    return this.userService.createUser(user)
  }

  logout() : void {

  }
}
