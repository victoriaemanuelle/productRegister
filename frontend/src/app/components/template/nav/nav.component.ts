import { ProductCrudComponent } from './../../../views/product-crud/product-crud.component'
import { HomeComponent } from './../../../views/home/home.component'
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatSidenavModule, RouterModule,
    HomeComponent, MatCardModule, ProductCrudComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
