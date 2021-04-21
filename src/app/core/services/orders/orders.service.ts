import { Injectable } from '@angular/core';
import { Order } from 'src/app/order.model';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  today = new Date();
  dateMade = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();

  orders:Order[] = [
    {
      id: "1",
      user: "Pine",
      date: this.dateMade,
      total: 123,
      products: [
        {
          id: "1",
          title: "Sticker",
          price: 123,
          description: "Nothing",
          image: "assets/images/sticker.png"
        }
      ],
      isExpanded: false,
    }
  ];

  constructor() { }

  getAllOrders():Order[] {
    return this.orders;
  }
}
