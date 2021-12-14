import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/product.model";

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
  constructor() { }

  ngOnInit(): void {
  }

}
