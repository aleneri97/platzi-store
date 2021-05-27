import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';

import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService
    .getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  clickProduct(id: number) {
    console.log('Product ID');
    console.log(id);
  }
}
