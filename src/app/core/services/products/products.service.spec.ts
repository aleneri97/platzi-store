import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from 'src/app/product.model';
import { environment } from 'src/environments/environment';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingService: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingService = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});


describe('Test for getAllProducts', () => {
  let httpClient: HttpClient;
  let httpTestingService: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingService = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);
  });

  it('should return an array of products', () => {
    // arrange
    const expectedProducts: Product[] = [{
      id: '1',
      title: 'Product 1',
      price: 10,
      description: 'Description 1',
      image: 'http://placehold.it/200x200',
    }, {
      id: '2',
      title: 'Product 2',
      price: 20,
      description: 'Description 2',
      image: 'http://placehold.it/200x200',
    }];

    let responseError: any;
    let responseData: Product[];

    // act
    service.getAllProducts()
      .subscribe( data => {
          responseData = data;
        }, error => {
          responseError = error;
        }
      );
    const req = httpTestingService.expectOne(`${environment.url_api}/products`);
    req.flush(expectedProducts);

    // assert
    expect(responseData).toEqual(expectedProducts);
    expect(responseError).toBeUndefined();
    expect(req.request.method).toEqual('GET');
    expect(responseData.length).toEqual(2);

  });
});
