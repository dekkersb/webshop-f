import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {Product} from "../shared/models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  test = 'Test';
  id= 1;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts();
  }

}
