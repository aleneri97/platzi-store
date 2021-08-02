import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as Sentry from '@sentry/browser';

import { Product } from './../../../product.model';

interface User{
  email: string;
  gender: string;
  phone: string;
}
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

  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomudsdsdsdsdser.me/api/?results=2')
      .pipe(
        catchError(this.handleError),
        map((res: any) => res.results as User[]));
  }

  getFile() {
    return this.http.get('assets/files/test.txt', { responseType: 'text' });
  }

  private handleError(error: HttpErrorResponse ) {
    console.error(error);
    Sentry.captureException(error);
    return throwError('Method not implemented.');
  }
}
