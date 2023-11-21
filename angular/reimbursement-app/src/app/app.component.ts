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

  id: string = '';
  name: string = '';
  amount: string = '';
  type: string = '';

  @ViewChild('reimbursementForm') form: NgForm;

  addReimbursement() {
    this.showInputs = true;
    this.reimbursements.push({});
  }

  onSubmit() {
    if (this.reimbursements.length > 0) {
      this.savedReimbursements.push([...this.reimbursements]);
      // this.showInputs = false;
      console.log('inside saved reimbursmenets');
      console.log(this.reimbursements);
      console.log(this.savedReimbursements);
      this.reimbursements = [];
    }
    console.log(this.form);
    console.log(this.id);
    console.log(this.name);
    console.log(this.amount);
    console.log(this.type);
  }

  deleteReimbursement(index: number) {
    this.reimbursements.splice(index, 1);
  }
}
