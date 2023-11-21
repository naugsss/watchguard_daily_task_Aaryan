import { Component } from '@angular/core';
import { AppModel } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';
import { ReimbursementModel } from '../reimbursement.model';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css'],
})
export class HomecomponentComponent {
  reimbursements: ReimbursementModel[];
  savedReimbursements: AppModel[];
  showInputs: boolean = false;

  constructor(private reimbursementService: AppService) {
    this.reimbursements = reimbursementService.reimbursement;
  }
  addReimbursement() {
    this.showInputs = true;
    this.reimbursements.push(new ReimbursementModel('', '', null, ''));
  }

  onSubmit() {
    this.reimbursementService.reimbursement = this.reimbursements;
    this.reimbursementService.newSubject.next(true);
  }

  deleteReimbursement(index: number) {
    this.reimbursementService.deleteReimbursement(index);
  }
}
