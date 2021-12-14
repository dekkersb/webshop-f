import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
  new Product('Tandpasta', 2.12)
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
