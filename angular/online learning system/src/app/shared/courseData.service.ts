import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Course } from '../components/courses/course/course.model';
import { CourseService } from '../components/courses/course.service';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  constructor(public http: HttpClient, private courseService: CourseService) {}

  fetchCourses() {
    console.log('fetching courses');
    return this.http.get<Course[]>('http://127.0.0.1:8000/courses').pipe(
      tap((response) => {
        console.log(response);
        // this.courseService.setCourses(courses);
      })
    );
  }

  // add new course
}
