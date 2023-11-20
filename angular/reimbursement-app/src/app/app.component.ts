import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  reimbursements: any[] = [];
  savedReimbursements: any[] = [];
  showInputs: boolean = false;

  addReimbursement() {
    this.showInputs = true;
    this.reimbursements.push({});
  }

  saveReimbursements() {
    if (this.reimbursements.length > 0) {
      this.savedReimbursements.push([...this.reimbursements]);
      this.reimbursements = [];
      this.showInputs = false;
    }
  }

  deleteReimbursement(index: number) {
    this.reimbursements.splice(index, 1);
  }
}
