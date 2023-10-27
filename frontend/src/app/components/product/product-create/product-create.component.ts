import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService,
    private router: Router){ }

  ngOnInit(): void {
  }

  createProduct(): void {
    //subscribe = vc é notificado quando a resposta chegar

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!')
      this.navigateToProductView()
    })

  
  }
  cancelProduct(): void {
    this.navigateToProductView()
  }

  navigateToProductView(): void {
    this.router.navigate(['/products'])
  }

}
