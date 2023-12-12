import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Course } from './course/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  coursesList = new Subject<Course[]>();
  private courses: Course[] = [];
  private allCourses: Course[] = [];
  private pendingCourses: Course[] = [];
  private purchasedCourses: Course[] = [];

  setCourses(course: Course[]) {
    this.courses = course;
    console.log(this.courses);
    this.coursesList.next(this.courses.slice());
  }

  // setAllCourses(course: Course[]) {
  //   this.allCourses = course;
  //   this.coursesList.next(this.allCourses.slice());
  // }

  setAllCourses(course: Course[]) {
    if (!this.allCourses.length) {
      this.allCourses = course;
    } else {
      this.allCourses = [...this.allCourses, ...course]; // Merge new courses
    }
    this.coursesList.next(this.allCourses.slice());
  }
  
  getAllCourses() {
    return this.allCourses.slice();
  }

  setPendingCourses(course: Course[]) {
    this.pendingCourses = course;
    this.coursesList.next(this.pendingCourses.slice());
  }
  getPendingCourses() {
    return this.pendingCourses.slice();
  }

  setPurchasedCourses(course: Course[]) {
    this.purchasedCourses = course;
    this.coursesList.next(this.purchasedCourses.slice());
  }
  getPurchasedCourses() {
    return this.purchasedCourses.slice();
  }
}
