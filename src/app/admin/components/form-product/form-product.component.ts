import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(private FormBuilder: FormBuilder, private productsService: ProductsService, private router: Router) {
    // this.buildForm(  );
    this.form = this.FormBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', []],
    });
  }

  ngOnInit() {
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe(newProduct => {
        this.router.navigate(['./admin/products']);
      });
    }
  }

  // private buildForm() {}

}
