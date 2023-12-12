import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Course } from './course/course.model';
import { CourseDataService } from 'src/app/shared/courseData.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  coursesList = new Subject<Course[]>();

  constructor(private courseDataService: CourseDataService) {}

  private allCourses: Course[] = [];
  private pendingCourses: Course[] = [];
  private purchasedCourses: Course[] = [];

  // setCourses(course: Course[]) {
  //   this.courses = course;
  //   console.log(this.courses);
  //   this.coursesList.next(this.courses.slice());
  // }

  // setAllCourses(course: Course[]) {
  //   this.allCourses = course;
  //   this.coursesList.next(this.allCourses.slice());
  // }

  fetchCourses(page: number, size: number) {
    this.courseDataService.fetchCourses(page, size).subscribe((courses) => {
      this.allCourses = courses;
      this.coursesList.next(this.allCourses.slice());
    });
  }

  setAllCourses(course: Course[]) {
    console.log(course);
    if (!this.allCourses.length) {
      this.allCourses = course;
    }
    // else {
    //   // this.allCourses = [...this.allCourses, ...course];
    //   console.log(this.allCourses);
    // }
    this.coursesList.next(this.allCourses.slice());
  }

  getAllCourses() {
    return this.allCourses.slice();
  }

  // getCourses(): Course[] {
  //   return this.coursesList.asObservable();
  // }

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
