import { MatButtonModule } from '@angular/material/button'
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProductCreateComponent } from '../../components/product/product-create/product-create.component';
import { MatCardModule } from '@angular/material/card';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';




@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [MatButtonModule, RouterModule, ProductCreateComponent, MatCardModule, ProductReadComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private router: Router) {

  }

  navigateToProductCreate(): void {
    this.router.navigate(['products/create'])
  }


}
