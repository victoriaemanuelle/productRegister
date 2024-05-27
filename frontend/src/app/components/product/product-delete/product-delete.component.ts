import { FormsModule } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../product-create/product.model';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [MatCardModule, MatInputModule, FormsModule],
  providers: [ProductService],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {
  product!: Product;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() =>
      this.productService.showMessage("Produto Excluído"))
    this.router.navigate(['/products'])

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}