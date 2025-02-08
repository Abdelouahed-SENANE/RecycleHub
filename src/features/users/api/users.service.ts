import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../../../models/models';
import { HttpClient } from '@angular/common/http';
import { environnemt as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http: HttpClient = inject(HttpClient);

  createUser(user: User): Observable<void> {
    return this.http.post<void>(env.apiUrl + 'users', user);
  }

  loadAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(env.apiUrl + 'users').pipe(
      catchError((err) => {
        console.error('Error fetching users:', err);
        return of([]);
      })
    );
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

  updateProfile(user: User): Observable<boolean> {
    const url = `${env.apiUrl}users/${user.id}`;
    return this.http.put<any[]>(url, user).pipe(
      map((user) => user !== null),
      catchError((error) => {
        console.error('Error tp upsate profile:', error);
        return of(false);
      })
    );
  }

  deleteUser(userId: string): Observable<boolean> {
    const url = `${env.apiUrl}users/${userId}`;
    return this.http.delete<void>(url).pipe(
      map(() => true),
      catchError((error) => {
        console.error('Error tp upsate profile:', error);
        return of(false);
      })
    );
  }
}
