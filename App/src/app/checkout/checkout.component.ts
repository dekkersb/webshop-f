import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {CartService} from "../shared/services/cart.service";
import {Orderitem} from "../shared/models/orderitem.model";
import {Order} from "../shared/models/order.model";

import {Customer} from "../shared/models/customer.model";
import {OrderService} from "../shared/services/order.service";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderItems = this.cartService.getOrderItems();
  totalOrderPrice = this.cartService.getTotalOrderPrice();


  onCreateOrder(postData: Customer)
  {
    const customer = new Customer();
    customer.name = postData.name;
    customer.phone = postData.phone;
    customer.city = postData.city;
    customer.email = postData.email;
    customer.address = postData.address;

    let order = new Order();
    order.items = this.orderItems;
    order.totalPrice = this.totalOrderPrice;
    order.customer = customer;

    console.log(order);

    this.http.post<Order>('http://recrashop.test/api/order/create',
      order
    ).subscribe(responseData => {
      window.location.href = (responseData['url']);
    });
    // this.router.navigateByUrl('/payment');
  }

  onCreateCustomer(postData: Customer)
  {
    const customer = new Customer();
    customer.name = postData.name;
    customer.phone = postData.phone;
    customer.city = postData.city;
    customer.email = postData.email;
    customer.address = postData.address;
    return customer;
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private cartService: CartService,
    ) {
  }

  ngOnInit(): void {
    this.totalOrderPrice = this.cartService.getTotalOrderPrice();
  }
}
