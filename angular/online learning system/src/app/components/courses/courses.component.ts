import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseDataService } from 'src/app/shared/courseData.service';
import { Course } from './course/course.model';
import { CourseService } from './course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  private courses: Course[] = [];
  subscription: Subscription;

  constructor(
    private courseService: CourseService,
    // private CoursesService: CoursesService
    private courseDataService: CourseDataService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.courseDataService.fetchCourses().subscribe((courses) => {
      this.courseService.setCourses(courses);
    });

    this.subscription = this.courseService.coursesList.subscribe(
      (courses: Course[]): void => {
        this.courses = courses;
      }
    );

    this.courses = this.courseService.getCourses();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
