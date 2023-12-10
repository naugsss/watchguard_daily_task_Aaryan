import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

import { User } from '../components/login/user.model';
import { Router } from '@angular/router';

interface AuthResponseData {
  code: number;
  message: string;
  status: string;
  token: string;
}

interface loginResponse {
  role: number;
  userid: number;
  expire: number;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  user = new BehaviorSubject<User>(null);

  login(username: string, password: string) {
    return this.http
      .post<AuthResponseData>('http://127.0.0.1:8000/login', {
        username: username,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          console.log(response);
          this.handleLogin(response);
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

  isLoggedIn(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData && userData.token;
  }

  autoLogin() {
    if (this.isLoggedIn()) {
      const userData: {
        username: string;
        role: number;
        token: string;
      } = JSON.parse(localStorage.getItem('userData'));

      const token = userData.token;
      const decodedToken: loginResponse = jwtDecode(token);

      if (decodedToken.expire < new Date().getTime()) {
        this.logout();
      } else {
        const user = new User(userData.username, userData.role, userData.token);
        this.user.next(user);
      }
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }

  handleLogin(response: any) {
    const jwt_token = response['access_token'];
    const decodedToken: loginResponse = jwtDecode(jwt_token, { header: true });

    const role = decodedToken['role'];
    const username = decodedToken['username'];
    const user = new User(username, role, jwt_token);
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
