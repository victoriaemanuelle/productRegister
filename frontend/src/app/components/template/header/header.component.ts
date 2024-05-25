import { MatIconModule } from '@angular/material/icon'
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, HttpClientModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() {

  }

}
