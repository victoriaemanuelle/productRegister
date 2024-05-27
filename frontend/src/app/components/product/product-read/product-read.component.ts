import { MatTableModule } from '@angular/material/table'
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product-create/product.model';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [CurrencyPipe, MatIconModule, MatTableModule, RouterModule],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css',
  providers: [ProductService]
})
export class ProductReadComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[] = [];
  displayedColumns = ["id", "name", "price", "action"];

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }




}