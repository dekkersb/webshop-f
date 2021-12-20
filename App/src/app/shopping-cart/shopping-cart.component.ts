import { Component, OnInit } from '@angular/core';

import {CartService} from "../shared/services/cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  orderItems = this.cartService.getOrderItems();
  totalOrderPrice = this.cartService.getTotalOrderPrice();

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cartService.getTotalOrderPrice();
  }

}
