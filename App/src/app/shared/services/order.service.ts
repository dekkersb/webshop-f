import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer.model";
import {Order} from "../models/order.model";
import {Router} from "@angular/router";
import {CartService} from "./cart.service";


@Injectable()
export class OrderService {

  orderItems = this.cartService.getOrderItems();
  totalOrderPrice = this.cartService.getTotalOrderPrice();

  // onCreateCustomer()
  // {
  //   const customer = new Customer();
  //   customer.name = postData.name;
  //   customer.phone = postData.phone;
  //   customer.city = postData.city;
  //   customer.email = postData.email;
  //   customer.address = postData.address;
  // }

  onCreateOrder(postData: Customer)
  {
    const customer = new Customer();
    customer.name = postData.name;
    customer.phone = postData.phone;
    customer.city = postData.city;
    customer.email = postData.email;
    customer.address = postData.address;

    const order = new Order();
    order.items = this.orderItems;
    order.totalPrice = this.totalOrderPrice;
    order.customer = customer;
    console.log(order);
    // this.http.post<Order>('http://recrashop.test/order/create',
    //   {
    //   }
    // ).subscribe(responseData => {
    // });
    // this.router.navigateByUrl('/payment');
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService,
  ) {
  }

}
