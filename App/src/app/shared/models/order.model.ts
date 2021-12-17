import {Customer} from "./customer.model";
import {Orderitem} from "./orderitem.model";

export class Order {
  constructor(
    public Customer: Customer,
    public orderDate: Date,
    public Orderitem: Orderitem,
    public totalOrderPrice: number,
  ) {
  }

}

