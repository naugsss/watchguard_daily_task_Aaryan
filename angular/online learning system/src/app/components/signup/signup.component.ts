import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private authService: AuthService,
    private toast: NgToastService,
    private router: Router
  ) {}

  onSubmit(authForm: NgForm) {
    const username = authForm.value.username;
    const password = authForm.value.password;
    const email = authForm.value.email;
    const name = authForm.value.name;

    console.log(authForm);
    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.signup(email, name, username, password);

    authObs.subscribe({
      next: (response) => {
        console.log('response', response);
        this.toast.success({
          detail: 'SignUp successfull.',
          summary: 'Please log in',
        });
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.log('error', error);
        this.toast.error({
          detail: 'SignUp failed',
          summary: error,
        });
      },
    });
  }
}
