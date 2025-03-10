import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-similar-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './similar-product.component.html',
  styleUrl: './similar-product.component.css',
})
export class SimilarProductComponent {
  @Input() productData!: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    ratings: {
      rate: number;
      coount: number;
    }[];
  };
  router = inject(Router);
  viewproduct(id: number) {
    this.router.navigate(['/Sproduct', id]);
  }
  // @Input() layout: string = '';
}
