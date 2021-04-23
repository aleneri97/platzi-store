import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {
    // console.log('1. constructor');
  }

  // ngOnChanges(changes:SimpleChanges) {
  //   console.log('2. ngOnChanges');
  //   console.log(changes);
  // }

  ngOnInit() {
    // console.log('3. ngOnInit');
  }

  ngDoCheck() {
    // console.log('4. DoCheck');
  }

  ngOnDestroy() {
    // console.log('5. OnDestroy');

  }

  addToCart() {
    this.cartService.addCart(this.product);
    // console.log('Añadir al carrito');
    // this.productClicked.emit(this.product.id);
  }
}
