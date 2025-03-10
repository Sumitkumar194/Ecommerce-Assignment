import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrendingProductsComponent } from './components/pages/trending-products/trending-products.component';
import { AddTocartComponent } from './components/pages/add-tocart/add-tocart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce';
}
