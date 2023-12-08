import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from '../components/login/user.model';
export interface AuthResponseData {
  code: number;
  message: string;
  status: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  user = new Subject<User>();

  login(username: string, password: string) {
    return this.http
      .post<AuthResponseData>('http://127.0.0.1:8000/login', {
        username: username,
        password: password,
      })
      .pipe(
        tap((response) => {
          catchError(this.handleError), console.log(response);
        })
      );
  }

  signup(email: string, name: string, username: string, password: string) {
    return this.http
      .post<AuthResponseData>('http://127.0.0.1:8000/register', {
        email: email,
        name: name,
        username: username,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          console.log(response);
        })
      );
  }

  handleLogin(userId: string, token: string) {
    const user = new User(userId, token);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorResponse: any) {
    let errorMessage = 'An Error Occured!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'This username already exists':
        errorMessage = 'This username already exists';
        break;

      case 'Please enter valid credentials.':
        errorMessage = 'Please enter valid credentials.';
        break;
    }
    return throwError(() => errorMessage);
  }
}
