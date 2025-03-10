import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-products',
  standalone: true,
  imports: [],
  templateUrl: './trending-products.component.html',
  styleUrl: './trending-products.component.css',
})
export class TrendingProductsComponent {
  router = inject(Router);
  @Input() productdata!: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
  viewproduct(id: number) {
    this.router.navigate(['/Sproduct', id]);
  }
}
