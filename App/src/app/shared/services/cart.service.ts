import { Injectable } from '@angular/core';

import {Product} from "../models/product.model";
import {ProductService} from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = this.productService.getProducts();
  orderItems: Product[] = [];

  addToCart(product: Product) {
    const productExistInCart = this.orderItems.find(item => item.productName === product.productName);
    if (productExistInCart) {
      productExistInCart.quantity++;
      productExistInCart.totalProductPrice = productExistInCart.productPrice * productExistInCart.quantity;
    } else {
      product.quantity = 1;
      this.orderItems.push(product);
      product.totalProductPrice = product.productPrice * product.quantity;
    }
  }

  deleteFromCart(orderItem: Product) {
    const productExistInCart = this.orderItems.find(item => item.productName == orderItem.productName);
    if (productExistInCart.quantity >= 1) {
      productExistInCart.quantity = productExistInCart.quantity -1;
      productExistInCart.totalProductPrice = productExistInCart.productPrice * productExistInCart.quantity;
     if (productExistInCart.quantity <= 1) {
       this.orderItems.forEach((value, index) => {
         if (value.quantity == 0) this.orderItems.splice(index, 1);
       });
     }
    }
  }

  getOrderItems() {
    return this.orderItems;
  }

  getTotalOrderPrice(orderItems) {
    return this.orderItems.reduce((sum, item) => sum += item.totalProductPrice, 0);
  }

  clearCart() {
    this.orderItems = [];
    return this.orderItems;
  }

  getCartQuantity (product: Product) {
    const productExistInCart = this.orderItems.find(item => item.productName === product.productName);
    if (productExistInCart) {
      product.quantity = productExistInCart.quantity;
    }
    return product.quantity;
  }

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
  }
}
