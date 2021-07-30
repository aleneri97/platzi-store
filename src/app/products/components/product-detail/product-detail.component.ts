import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';

import { ProductsService } from '@core/services/products/products.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private http: HttpClient) { }

  ngOnInit() {
    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => this.productsService.getProduct(params.id))
    );
  }
}
