import { Component, OnInit } from '@angular/core';
import { CourseDataService } from 'src/app/shared/courseData.service';

@Component({
  selector: 'app-admin-mentor',
  templateUrl: './admin-mentor.component.html',
  styleUrls: ['./admin-mentor.component.css'],
})
export class AdminMentorComponent {
  mentorEarnings: any = [];

  constructor(private CourseDataService: CourseDataService) {}

  ngOnInit(): void {
    this.CourseDataService.fetchMentorEarning().subscribe((earning) => {
      this.mentorEarnings = earning;
      // console.log(earning);
    });
  }
}
