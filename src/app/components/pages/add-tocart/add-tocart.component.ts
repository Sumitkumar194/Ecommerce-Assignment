import { Component, inject } from '@angular/core';
import { SimilarProductComponent } from '../similar-product/similar-product.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../Services/cart.service';
@Component({
  selector: 'app-add-tocart',
  standalone: true,
  imports: [SimilarProductComponent, CommonModule],
  templateUrl: './add-tocart.component.html',
  styleUrl: './add-tocart.component.css',
})
export class AddTocartComponent implements OnInit {
  activerouter = inject(ActivatedRoute);
  router = inject(Router);
  http = inject(HttpClient);
  crtservce = inject(CartService);
  product: any;
  similarProduct: any[] = [];
  ngOnInit(): void {
    this.activerouter.paramMap.subscribe((res) => {
      const productId = Number(res.get('id'));

      this.http
        .get<any[]>(`https://fakestoreapi.com/products`)
        .subscribe((res) => {
          // this.product = res;
          // console.log('product data yaha hai', this.product);
          this.product = res.find((p) => p.id === productId);
          this.similarProduct = res.filter(
            (p) =>
              p.category === this.product.category && p.id !== this.product.id
          );
          // console.log('product :- ', this.product);
          // console.log('similar product : ', this.similarProduct);
        });
    });
  }
  addOrGoTocart: boolean = true;
  AddToCart(product: any) {
    this.crtservce.addTocart(product);
    this.addOrGoTocart = false;
  }
  GoToCart() {
    this.router.navigateByUrl('view-cart');
  }
  BuyNow(product: any) {
    this.crtservce.addTocart(product);
    this.router.navigateByUrl('view-cart');
  }
}
