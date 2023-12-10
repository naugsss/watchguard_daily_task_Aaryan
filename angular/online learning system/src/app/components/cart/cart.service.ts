import { Injectable } from '@angular/core';
import { Course } from '../courses/course/course.model';
import { NgToastService } from 'ng-angular-popup';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class cartService {
  private cart: Course[] = [];
  cartSub = new BehaviorSubject<Course[]>(this.cart);

  constructor(private toast: NgToastService) {}

  addToCart(course: Course) {
    this.cart.push(course);
    this.cartSub.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.toast.success({ detail: 'Course added successfully to the cart' });
  }

  removeFromCart(courseName: string) {
    this.cart = this.cart.filter((course) => course.name !== courseName);
    this.cartSub.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart(): Observable<Course[]> {
    return this.cartSub.asObservable();
  }
}
