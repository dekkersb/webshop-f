import {Component, OnInit} from '@angular/core';

import {CartService} from "../shared/services/cart.service";
import {ProductService} from "../shared/services/product.service";
import {Product} from "../shared/models/product.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products = this.productService.getProducts();
  orderItems = this.cartService.getOrderItems();

  totalOrderPrice = 0;

  getTotalOrderPrice() {
    this.cartService.getTotalOrderPrice(this.orderItems);
  }

  deleteFromCart(orderItem: Product) {
    this.cartService.deleteFromCart(orderItem);
    this.totalOrderPrice = this.cartService.getTotalOrderPrice(this.orderItems);
  }

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.totalOrderPrice = this.cartService.getTotalOrderPrice(this.orderItems);
  }
}
