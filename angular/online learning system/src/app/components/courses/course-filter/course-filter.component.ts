import { Component } from '@angular/core';
import { Course } from '../course/course.model';
import { CourseService } from '../course.service';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css'],
})
export class CourseFilterComponent {
  constructor(private filterService: FilterService) {}

  course: Course[];

  filterCourseByRating(rating: number) {
    this.filterService.setSelectedRating(rating);
  }
}
