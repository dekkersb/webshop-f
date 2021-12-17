import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {Product} from "../shared/models/product.model";
import {Customer} from "../shared/models/customer.model";
import {CartService} from "../shared/services/cart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

orderItems = this.cartService.getOrderItems();

  onCreatePost(postData: {customerName: string; customerEmail: string; customerAddress: string; customerCity: string; customerPhone: string;})
  {
    this.http.post('http://recrashop.test/order/create', postData).subscribe(responseData => {
      console.log(responseData)
    });
    console.log(postData);
    // this.router.navigateByUrl('/payment');
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private cartService: CartService,
    ) {
  }

  ngOnInit(): void {}
}
