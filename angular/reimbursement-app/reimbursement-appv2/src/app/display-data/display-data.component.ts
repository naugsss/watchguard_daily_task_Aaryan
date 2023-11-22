import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent implements OnInit {
  userDetails: AppModel;

  constructor(private reimbursementService: AppService) {}

  ngOnInit(): void {
    this.reimbursementService.userSubject.subscribe(() => {
      this.userDetails = JSON.parse(
        JSON.stringify(this.reimbursementService.employeeData)
      );
    });
  }
}
