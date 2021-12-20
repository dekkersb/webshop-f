import { Injectable } from '@angular/core';

import {Orderitem} from "../models/orderitem.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orderItems: Orderitem[] = [];
  totalOrderPrice = this.getTotalOrderPrice();

  addToCart(orderItem: Orderitem) {
      if (orderItem.quantity == null) {
        this.orderItems.push(orderItem);
        orderItem.quantity = 1;
        orderItem.totalProductPrice = orderItem.productPrice * orderItem.quantity;
      } else {
          orderItem.quantity++;
          orderItem.totalProductPrice = orderItem.productPrice * orderItem.quantity;
        }
  }

  // deleteFromCart(orderItem: Orderitem) {
  //   if (orderItem.quantity > 0) {
  //     this.orderItems.s(orderItem);
  //     orderItem.quantity = 1;
  //   } else {
  //     orderItem.quantity++;
  //   }
  // }

  getOrderItems() {
    return this.orderItems;
  }

  getTotalOrderPrice() {
    return this.orderItems.reduce((sum, item) => sum += item.totalProductPrice, 0);
  }

  clearCart() {
    this.orderItems = [];
    return this.orderItems;
  }

  constructor() { }
}
