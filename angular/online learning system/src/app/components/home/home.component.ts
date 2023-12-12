import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseDataService } from 'src/app/shared/courseData.service';
import { Course } from '../courses/course/course.model';
import { Subscription } from 'rxjs';
import { CourseService } from '../courses/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  subscription: Subscription;
  constructor(
    private courseDataService: CourseDataService,
    private courseService: CourseService
  ) {}
  ngOnInit(): void {
    console.log('inside home component');
    this.fetchCourses(1, 3);
    this.subscription = this.courseService.coursesList.subscribe(
      (courses: Course[]) => {
        this.courses = courses.slice(); // Set courses only once
        console.log(this.courses);
      }
    );
  }

  fetchCourses(page: number, size: number) {
    this.courseDataService.fetchCourses(page, size).subscribe((courses) => {
      this.courses = courses; // Update only courses
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
