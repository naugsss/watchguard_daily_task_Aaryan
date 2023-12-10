import { Injectable } from '@angular/core';
import { Course } from '../courses/course/course.model';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class cartService {
  private cart: Course[] = [];

  constructor(private toast: NgToastService) {}

  addToCart(course: Course) {
    this.cart.push(course);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.toast.success({ detail: 'Course added successfully to the cart' });
  }

  //   removeFromCart(courseId: string) {
  //     this.cart = this.cart.filter((course) => course.id !== courseId);
  //   }

  getCart(): Course[] {
    return this.cart;
  }
}
