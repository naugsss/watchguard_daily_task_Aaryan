import { Injectable } from '@angular/core';
import { Course } from '../course/course.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  selectedRating: number = 0;

  setSelectedRating(rating: number) {
    this.selectedRating = rating;
    console.log(this.selectedRating);
  }

  filterCourses(courses: Course[]): Course[] {
    if (this.selectedRating === 0) {
      return courses;
    }
    return courses.filter((course) => course.rating >= this.selectedRating);
  }
}
