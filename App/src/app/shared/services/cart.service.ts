import { Injectable } from '@angular/core';

import {Product} from "../models/product.model";
import {ProductService} from "./product.service";
import {Orderitem} from "../models/orderitem.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = this.productService.getProducts();
  orderItems: Orderitem[] = [];

  addToCart(product: Product) {
    const itemExistInCart = this.orderItems.find(item => item.id == product.id);
    if (itemExistInCart) {
      itemExistInCart.quantity++;
      this.setTotalProductPrice(itemExistInCart);
    } else {
      const orderItem = new Orderitem()

      orderItem.product = product;
      orderItem.id = product.id;
      orderItem.quantity = 1;
      orderItem.totalProductPrice = orderItem.product.price;

      this.orderItems.push(orderItem);
    }
  }

  deleteFromCart(orderItem: Orderitem) {
    const itemExistInCart = this.orderItems.find(item => item.id == orderItem.id);
    if (itemExistInCart.quantity >= 1) {
      itemExistInCart.quantity = itemExistInCart.quantity -1;
      this.setTotalProductPrice(itemExistInCart);
     if (itemExistInCart.quantity <= 1)
      {
       this.orderItems.forEach((value, index) => {
         if (value.quantity == 0) {if (confirm("Are you sure to remove " + orderItem.product.name + " from shoppingcart?"))this.orderItems.splice(index, 1); }
       });
     }
    }
  }

  getOrderItems() {
    return this.orderItems;
  }

  setTotalProductPrice(itemExistInCart) {
    return itemExistInCart.totalProductPrice = itemExistInCart.quantity * itemExistInCart.product.price;
  }

  getTotalOrderPrice() {
    return this.orderItems.reduce((sum, item) => sum += item.totalProductPrice, 0);
  }

  clearCart() {
    this.orderItems = [];
    return this.orderItems;
  }

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
  }
}
