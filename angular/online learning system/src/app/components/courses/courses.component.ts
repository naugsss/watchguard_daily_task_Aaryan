import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseDataService } from 'src/app/shared/courseData.service';
import { Course } from './course/course.model';
import { CourseService } from './course.service';
import { FilterService } from './course-filter/filter.service';
import { CourseFilterComponent } from './course-filter/course-filter.component';

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
  currentPage: number = 1;
  pageSize: number = 10;
  loadingMore: boolean = false;

  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('filterComponent') filterComponent: CourseFilterComponent;

  constructor(
    private courseService: CourseService,
    private courseDataService: CourseDataService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');

    this.courseDataService.fetchCourses().subscribe((courses) => {
      this.courseService.setAllCourses(courses);
      this.filteredCourse = courses;
    });

    this.subscription = this.courseService.coursesList.subscribe(
      (courses: Course[]): void => {
        this.courses = courses;
      }
    );

    if (this.filterComponent) {
      this.filterComponent.ratingSelected.subscribe((rating) => {
        console.log(rating);
        this.updateCourseByRating(rating);
      });
    }
  }

  updateCourseByRating(rating: number) {
    this.filteredCourse = this.filterService.filterCourses(
      this.courses,
      this.searchtext
    );

    console.log(this.filteredCourse);
  }

  onRatingSelect(rating: number) {
    this.filterService.setSelectedRating(rating);
    this.updateCourses();
    console.log(this.filteredCourse);
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
      return (
        course.name.toLowerCase().includes(this.searchtext.toLowerCase()) &&
        course.rating >= this.filterService.selectedRating
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
