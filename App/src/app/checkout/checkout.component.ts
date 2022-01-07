import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {CartService} from "../shared/services/cart.service";
import {OrderService} from "../shared/services/order.service";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderItems = this.cartService.getOrderItems();
  totalOrderPrice = this.cartService.getTotalOrderPrice();

  constructor(
    private router: Router,
    private http: HttpClient,
    private cartService: CartService,
    public orderService: OrderService,
    ) {
  }

  ngOnInit(): void {

  }
}
