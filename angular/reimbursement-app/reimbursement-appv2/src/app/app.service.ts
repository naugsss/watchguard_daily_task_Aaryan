import { Injectable } from '@angular/core';
import { ReimbursementModel } from './reimbursement.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  public reimbursement: ReimbursementModel[] = [];

  getReimbursement() {
    console.log(this.reimbursement);
    return this.reimbursement;
  }

  addReibursement(reimbursement: ReimbursementModel) {
    this.reimbursement.push(reimbursement);
  }

  deleteReimbursement(index: number) {
    this.reimbursement.splice(index, 1);
  }

  newSubject = new Subject<boolean>();
}
