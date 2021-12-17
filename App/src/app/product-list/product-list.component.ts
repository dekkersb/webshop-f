import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {Product} from "../shared/models/product.model";

import {CartService} from "../shared/services/cart.service";
import {ProductService} from "../shared/services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = this.productService.getProducts();
  orderItems = this.cartService.getOrderItems();

  constructor(
    private router: Router,
    private http: HttpClient,
    private cartService: CartService,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe();
    console.log(this.products);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
