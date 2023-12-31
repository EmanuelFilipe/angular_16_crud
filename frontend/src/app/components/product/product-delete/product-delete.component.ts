import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})

export class ProductDeleteComponent implements OnInit {

  product!: Product

  constructor(private productService: ProductService, 
    private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(parseInt(id!)).subscribe(p => {
      this.product = p
    })
  }

  deleteProduct(): void{
    this.productService.delete(this.product.id!).subscribe(d => {
      this.productService.showMessage('Produto excluído com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
