import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment';
  reactiveForm: FormGroup;

  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    
    this.reactiveForm = new FormGroup({
      projectname: new FormControl(null, [
        Validators.required,
        this.nameValidator.bind(this),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.asyncEmailValidator
      ),
      status: new FormControl('Stable'),
    });

    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { isForbiddenName: true };
    }
    return null;
  }

  asyncEmailValidator(control: FormControl): Promise<any> | Observable<any> {
    const pr = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'naugs@mail.com') {
          resolve({ isForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });

    return pr;
  }
}
