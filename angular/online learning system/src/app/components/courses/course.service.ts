import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Course } from './course/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  coursesList = new Subject<Course[]>();
  private courses: Course[] = [];

  setCourses(course: Course[]) {
    this.courses = course;
    this.coursesList.next(this.courses.slice());
  }

  getCourses() {
    return this.courses.slice();
  }
}
