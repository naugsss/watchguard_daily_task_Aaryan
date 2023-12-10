import { Component, OnInit } from '@angular/core';
import { cartService } from './cart.service';
import { Course } from '../courses/course/course.model';
import { CourseDataService } from 'src/app/shared/courseData.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: cartService,
    private courseDataService: CourseDataService
  ) {}

  cart: Course[] = [];

  ngOnInit(): void {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
      console.log(this.cart);
    } else {
      this.cartService.getCart().subscribe((cart) => {
        this.cart = cart;
        console.log(this.cart);
      });
    }
  }

  onBuyNowClick(course: Course) {
    this.courseDataService.purchaseCourse(course);
    this.onRemoveClick(course.name);
    this.updateCart();
  }

  onRemoveClick(courseName: string) {
    this.cartService.removeFromCart(courseName);
    this.updateCart();
  }

  updateCart() {
    this.cartService.cartSub.subscribe((cart) => {
      this.cart = cart;
    });
  }
}
