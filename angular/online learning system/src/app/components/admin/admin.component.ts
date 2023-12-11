import { Component } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  courseButton: boolean = true;
  mentorButton: boolean = false;
  constructor(private adminService: AdminService) {}
  courseButtonClicked() {
    // this.adminService.buttonClicked.next('course button');
    this.courseButton = true;
    this.mentorButton = false;
  }

  mentorButtonClicked() {
    this.mentorButton = true;
    this.courseButton = false;
    // this.adminService.buttonClicked.next('mentor button');
  }
}
