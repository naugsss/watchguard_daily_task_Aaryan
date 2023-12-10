import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';
import { Course } from '../components/courses/course/course.model';
import { CourseService } from '../components/courses/course.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  constructor(public http: HttpClient, private toast: NgToastService) {}

  fetchCourses() {
    return this.http.get<Course[]>('http://127.0.0.1:8000/courses').pipe(
      tap((response) => {
        // this.courseService.setCourses(courses);
      })
    );
  }

  fetchPurchasedCoures() {
    return this.http
      .get<Course[]>('http://127.0.0.1:8000/purchased_courses')
      .pipe(
        tap((response) => {
          console.log(response);
          // this.courseService.setCourses(courses);
        })
      );
  }

  purchaseCourse(course: Course) {
    this.http
      .post('http://127.0.0.1:8000/courses/' + course.name, {}, {})
      .subscribe({
        next: (response) => {
          console.log(response['message']);
          if (response['message'] === "You've already purchased this course.") {
            this.toast.info({
              detail: 'Course already purchased',
              summary: 'Visit my learning section to access the course',
            });
          } else {
            this.toast.success({
              detail: response['message'],
              summary: 'Visit my learning section to access the course',
            });
          }
        },
        error: (error) => {
          console.log(error);
          this.toast.error({
            detail: 'There was an error in purchasing the course.',
            summary: 'Please try again',
          });
        },
      });
  }

  // add new course
}
