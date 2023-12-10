import { Component, OnInit } from '@angular/core';
import { cartService } from './cart.service';
import { Course } from '../courses/course/course.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: cartService) {}

  cart: Course[] = [];
  cartData: string;

  // ngOnInit(): void {
  //   this.cartData = localStorage.getItem('cart');
  //   if (cartData) {
  //     this.cart = JSON.parse(cartData);
  //   }
  // }

  get cartItems(): Course[] {
    this.cartData = localStorage.getItem('cart');
    if (this.cartData) {
      this.cart = JSON.parse(this.cartData);
    }

    return this.cartService.getCart();
  }
}
