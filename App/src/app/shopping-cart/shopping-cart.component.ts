import {Component, OnInit} from '@angular/core';

import {CartService} from "../shared/services/cart.service";
import {ProductService} from "../shared/services/product.service";
import {Product} from "../shared/models/product.model";
import {Orderitem} from "../shared/models/orderitem.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products = this.productService.getProducts();
  orderItems = this.cartService.getOrderItems();
  totalOrderPrice = this.cartService.getTotalOrderPrice();

  deleteFromCart(orderItem: Orderitem) {
    this.cartService.deleteFromCart(orderItem);
    this.totalOrderPrice = this.cartService.getTotalOrderPrice();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.totalOrderPrice = this.cartService.getTotalOrderPrice();
  }

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
