import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { CourseDataService } from 'src/app/shared/courseData.service';
import { Course } from './course/course.model';
import { CourseService } from './course.service';
import { FilterService } from './course-filter/filter.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  subscription: Subscription;

  searchtext: string = '';
  filteredCourse: Course[] = [];

  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  constructor(
    private courseService: CourseService,
    private courseDataService: CourseDataService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.courseDataService.fetchCourses().subscribe((courses) => {
      this.courseService.setCourses(courses);
      this.filteredCourse = courses;
    });

    this.subscription = this.courseService.coursesList.subscribe(
      (courses: Course[]): void => {
        this.courses = courses;
      }
    );

    this.courses = this.courseService.getCourses();
  }
  onRatingSelect(rating: number) {
    this.filterService.setSelectedRating(rating);
    this.updateCourses();
  }

  onSearchChange() {
    this.searchtext = this.searchInput.nativeElement.value;
    this.updateCourses();
  }

  onSearchClick() {
    this.updateCourses();
  }

  updateCourses() {
    this.filteredCourse = this.courses.filter((course) => {
      return course.name.toLowerCase().includes(this.searchtext.toLowerCase());
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
