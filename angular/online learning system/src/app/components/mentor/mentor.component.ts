import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseDataService } from 'src/app/shared/courseData.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css'],
})
export class MentorComponent {
  name: string = '';
  price: number = 0;
  duration: string = '';
  video: string = '';

  faq: string = '';
  faqAnswer: string = '';

  @ViewChild('courseForm') form: NgForm;
  mentorEarnings: any = [];

  constructor(private courseDataService: CourseDataService) {}
  ngOnInit(): void {
    this.courseDataService.fetchMentorEarning().subscribe((earning) => {
      this.mentorEarnings = earning;
      // console.log(earning);
    });
  }

  onSubmit(): void {
    const courseData = {
      name: this.form.value.name,
      price: +this.form.value.price,
      duration: +this.form.value.duration,
      video: this.form.value.video,
    };
    console.log(courseData);
    this.courseDataService.addCourse(courseData);

    this.form.reset();
  }
}
