import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ReimbursementModel } from '../reimbursement.model';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent implements OnInit {
  userDetails: ReimbursementModel;
  savedReimbursements: Array<ReimbursementModel>;
  object = Object;

  constructor(private reimbursementService: AppService) {}

  ngOnInit(): void {
    this.userDetails = new ReimbursementModel('', '', null, '');
    this.reimbursementService.newSubject.subscribe(() => {
      this.savedReimbursements = JSON.parse(
        JSON.stringify(this.reimbursementService.reimbursement)
      );
    });
  }
}
