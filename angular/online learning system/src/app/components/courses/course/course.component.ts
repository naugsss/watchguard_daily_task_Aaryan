import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from './course.model';
import { cartService } from '../../cart/cart.service';
import { CourseDataService } from 'src/app/shared/courseData.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  @Input() course: Course;
  @Input() index: number;
  @Input() price: boolean = true;

  constructor(
    private cartService: cartService,
    private router: Router,
    private CourseDataService: CourseDataService
  ) {}

  addTocart(course: Course) {
    this.cartService.addToCart(course);
  }

  get filledStars(): number {
    return Math.floor(this.course.rating);
  }

  get partialStar(): boolean {
    return this.course.rating % 1 !== 0;
  }

  isOnCoursePage(): boolean {
    return this.router.url === '/courses';
  }

  isOnAdminPage(): boolean {
    return this.router.url === '/admin';
  }

  isOnCartPage(): boolean {
    return this.router.url === '/cart';
  }
}
