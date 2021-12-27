import {Customer} from "./customer.model";
import {Orderitem} from "./orderitem.model";

export class Order {
  id: number;
  totalPrice: number;
  customer: Customer;
  items: Orderitem[];
}

