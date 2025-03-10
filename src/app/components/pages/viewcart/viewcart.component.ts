import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewcart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewcart.component.html',
  styleUrl: './viewcart.component.css',
})
export class ViewcartComponent {
  cartservice = inject(CartService);
  router = inject(Router);
  cartProducts = this.cartservice.getallcart();
  subtotal = this.cartservice.getTotalAmount();
  productTotalamt = this.cartservice.ProductTotalAmount();
  discount = Math.floor(this.subtotal() % 10);
  allTotal = signal(this.subtotal() + this.discount);
  GoToCart() {
    this.router.navigateByUrl('all-product');
    console.log(this.cartProducts);
  }

  RemovefromCart(product: number) {
    this.cartservice.removeFromcart(product);
    // alert('Hua ki Nahi');
    this.cartProducts = this.cartservice.getallcart();
    // console.log(typeof this.copycart);
  }
  incresItem(productId: number) {
    this.cartservice.increaseItem(productId);
    this.cartProducts = this.cartservice.getallcart();

    this.allTotal = signal(this.subtotal() + this.discount);
  }
  decreseItem(productid: number) {
    this.cartservice.decreaseItem(productid);
    this.cartProducts = this.cartservice.getallcart();

    this.allTotal = signal(this.subtotal() + this.discount);
  }
}
