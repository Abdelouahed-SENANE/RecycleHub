import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { User } from '../../../models/user.model';
import { LocalStorageService } from '../../../core/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { environnemt as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http: HttpClient = inject(HttpClient);

  createUser(user: User) : Observable<void>{
    return this.http.post<void>(env.apiUrl+'users', user);
  }

  loadAllUsers() : Observable<User[]> {
    return this.http.get<any[]>(env.apiUrl+"users").pipe(
      catchError((err) => {
        console.error('Error fetching users:', err);
        return of([])
      })
    )
  }

   existByEmail(email: string): Observable<boolean> {
    const url = `${env.apiUrl}users?email=${encodeURIComponent(email)}`;
    return this.http.get<any[]>(url).pipe(
      map((users) => users.length > 0),
      catchError((error) => {
        console.error('Error checking email:', error);
        return of(false); 
      })
    );
  }

}
