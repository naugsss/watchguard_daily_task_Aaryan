import { Component } from '@angular/core';

import { AppModel } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css'],
})
export class HomecomponentComponent {
  userData: AppModel;

  constructor(private reimbursementService: AppService) {}

  ngOnInit() {
    this.userData = this.reimbursementService.employeeData;
  }

  addReimbursement() {
    this.userData.reimbursement.push({
      id: '',
      name: '',
      amount: null,
      type: '',
    });
  }

  onSubmit() {
    this.reimbursementService.newSubject.next(this.userData);
  }

  deleteReimbursement(index: number) {
    this.reimbursementService.employeeData.reimbursement.splice(index, 1);
  }
}
