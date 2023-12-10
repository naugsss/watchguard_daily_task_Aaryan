import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from './course.model';
import { cartService } from '../../cart/cart.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  @Input() course: Course;
  @Input() index: number;

  constructor(private cartService: cartService, private router: Router) {}

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
}
