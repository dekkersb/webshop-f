import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/product.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [
    new Product('Tandpasta', 2.20),
    new Product('Shampoo', 1.45),
    new Product('Wc papier', 3.45)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
