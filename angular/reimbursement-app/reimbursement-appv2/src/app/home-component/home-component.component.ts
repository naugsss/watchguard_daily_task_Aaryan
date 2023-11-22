import { Component } from '@angular/core';

import { AppModel } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomecomponentComponent {
  userData: AppModel;

  constructor(private reimbursementService: AppService) {}

  ngOnInit() {
    this.userData = this.reimbursementService.employeeData;
  }

  onSubmit() {
    this.reimbursementService.userSubject.next(this.userData);
  }

  addReimbursement() {
    this.userData.reimbursement.push({
      id: null,
      name: '',
      amount: null,
      type: '',
    });
  }

  deleteReimbursement(index: number) {
    this.reimbursementService.employeeData.reimbursement.splice(index, 1);
  }
}
