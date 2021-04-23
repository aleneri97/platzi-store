import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Product } from './../../../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  deleteProduct(id: string) {
    return this.http.delete<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, product: Product) {
    return this.http.put<Product>(`${environment.url_api}/products/${id}`, product);
  }
}
