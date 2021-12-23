import {Injectable} from "@angular/core";

import {Product} from "../models/product.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService {
  products: Product[] = [];

  getProducts(){
    return this.http.get<Product[]>
    ('http://recrashop.test/api/products/');
  }

  constructor(
    private http: HttpClient,
  ) {
  }

}
