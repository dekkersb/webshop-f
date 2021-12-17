import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderItems: Product[] = [];
  // totalOrderPrice = this.getTotalOrderPrice();

  addToCart(product: Product) {
    this.orderItems.push(product);
  }

  getOrderItems() {
    return this.orderItems;
  }

  // getTotalOrderPrice() {
  //   return this.orderItems.reduce((acc, prod) => acc += prod.productPrice * prod.quantity , 0)
  // }

  clearCart() {
    this.orderItems = [];
    return this.orderItems;
  }

  constructor() { }
}
