import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {Product} from "../shared/models/product.model";

import {CartService} from "../shared/services/cart.service";
import {ProductService} from "../shared/services/product.service";
import {Orderitem} from "../shared/models/orderitem.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = this.productService.getProducts();
  orderItems = this.cartService.getOrderItems();

  addToCart(product: Product) {
      this.cartService.addToCart(product);
  }

  getCartQuantity(orderItem: Orderitem) {
    const itemExistInCart = this.orderItems.find(item => item.id === orderItem.id);
    if (itemExistInCart) {
      orderItem.quantity = itemExistInCart.quantity;
    }
    return orderItem.quantity;
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private cartService: CartService,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    console.log(this.productService.getProducts());
  }
}
