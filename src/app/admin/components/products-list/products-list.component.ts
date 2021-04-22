import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    await this.fetchProducts();
  }

  fetchProducts() {
    return new Promise((resolve, reject) => {
      this.productsService.getAllProducts().subscribe(products => {
        this.products = products;
        resolve(true);
      });
    });
  }

  deleteProduct(product: Product) {
    // Iniciar SnackBar
    const snack = this.snackBar.open('Item eliminado', 'Deshacer', {
      duration: 3000,
    });

    // Eliminar de arreglo local con backup
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
      this.products = [...this.products];
    }

    // Timeout para invocar  eliminación con API
    const timeout = setTimeout(() => {
      this.productsService.deleteProduct(product.id).subscribe(res => {
        if (!res) {
          console.log('Error en el API');
        } else {
          console.log('Eliminado');
        }
      });
    }, 3000);

    // Undo cancelando timeout y regresando backup al arreglo local
    snack.onAction().subscribe(() => {
      clearTimeout(timeout);
      console.log('Se ha cancelado la eliminación');
      this.products.splice(index, 0, product);
      this.products = [...this.products];
    });
  }

}
