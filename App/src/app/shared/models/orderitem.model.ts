import {Product} from "./product.model";

export class Orderitem {
  constructor(
    public productName: Product,
    public productPrice: number,
    public quantity: number,
    public totalProductPrice: number,
  ) {
  }

}

