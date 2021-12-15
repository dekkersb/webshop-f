import {Component, OnInit} from '@angular/core';
import {Product} from "../shared/product.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  products: Product[] = [
    new Product('Tandpasta', 2.20),
    new Product('Shampoo', 1.45),
    new Product('Wc papier', 3.45)
  ];

  customer = {
    customerName: '',
    customerEmail: '',
    customerAddress: '',
    customerCity: '',
    customerPhone: '',
  };

  onCreatePost(postData: {name: string; email: string; address: string; city: string; phone: string;})
  {
    this.http.post('http://recrashop.test/order/create', postData).subscribe(responseData => {
      console.log(responseData)
    });
    console.log(postData);
    // this.router.navigateByUrl('/payment');
  }

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {}

}
