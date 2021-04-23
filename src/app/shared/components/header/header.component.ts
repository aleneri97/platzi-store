import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total = 0;
  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(cart => {
      this.total = cart.length;
    })
  }

  ngOnInit() {
  }

}
