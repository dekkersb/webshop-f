import {Product} from "./product.model";

export class Orderitem {
  constructor(
    public productName: string,
    public productPrice: number,
    public quantity: number,
    public totalProductPrice: number,
  ) {
  }
}

