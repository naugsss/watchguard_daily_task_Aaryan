import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
  ) {}
  isLoading = false;

  onSubmit(authForm: NgForm) {
    const username = authForm.value.username;
    const password = authForm.value.password;
    this.isLoading = true;

    console.log(authForm);
    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.login(username, password);

    authObs.subscribe({
      next: (response) => {
        console.log('response', response);
        this.isLoading = false;
        this.toast.success({
          detail: 'Login successful.',
        });
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
        this.toast.error({
          detail: 'Login failed',
          summary: error,
        });
      },
    });
  }
}
