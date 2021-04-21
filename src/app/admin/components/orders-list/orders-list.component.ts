import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { Order } from 'src/app/order.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})

export class OrdersListComponent implements OnInit {

  orders: Order[];
  displayedColumns: string[] = ['id', 'user', 'date', 'products', 'total','actions'];


  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders(){
    this.orders = this.ordersService.getAllOrders();
  }



}
