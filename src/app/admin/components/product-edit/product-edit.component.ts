import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  originalForm: FormGroup;
  id: string;

  constructor(private FormBuilder: FormBuilder,
              private productsService: ProductsService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.form = this.FormBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', []],
    });
    this.originalForm = this.FormBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', []],
    });
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params:Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
        this.originalForm.patchValue(product);
      })
    })
  }

  saveProduct(event: Event){
    event.preventDefault();
    const myForm = JSON.stringify(this.form.value);
    const myOriginalForm = JSON.stringify(this.originalForm.value);
    if (myForm === myOriginalForm) {
      console.log(`equals, won't do shit`);
    } else {
      console.log('not equals');
      if (this.form.valid) {
        const product = this.form.value;
        this.productsService.updateProduct(this.id, product).subscribe(newProduct => {
          // Aquí podría poner un snack comnfirmando los cambios.
        });
      }
    }
    this.router.navigate(['./admin/products']);
  }

}
