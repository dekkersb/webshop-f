import {Component, OnInit} from '@angular/core';

import {CartService} from "../shared/services/cart.service";
import {ProductService} from "../shared/services/product.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products = this.productService.getProducts();
  orderItems = this.cartService.getOrderItems();

  totalOrderPrice = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.totalOrderPrice = this.cartService.getTotalOrderPrice();
  }

}
