export class Product {
  totalProductPrice: number;
  constructor(
    public productName: string,
    public productPrice: number,
    public quantity?: number
    ) {
  }

}

