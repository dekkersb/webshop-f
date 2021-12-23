import {Product} from "./product.model";
import {Order} from "./order.model";


export class Orderitem {
  id: number;
  product: Product;
  // order: Order;
  quantity: number;
  totalProductPrice: number;
}

