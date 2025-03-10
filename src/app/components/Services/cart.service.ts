import { computed, Injectable, signal } from '@angular/core';
import { product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  totalItem = signal<number>(0);
  private cartItem = signal<{ item: product; quantity: number }[]>([]);
  getallcart() {
    return this.cartItem();
  }

  addTocart(product: product) {
    this.cartItem.update((items) => {
      const existItem = items.find((p) => p.item.id === product.id);
      if (existItem) {
        return items.map((p) =>
          p.item.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...items, { item: product, quantity: 1 }];
    });
    this.totalItem.set(this.totalItem() + 1);
  }

  removeFromcart(productid: number) {
    this.cartItem.update((items) =>
      items.filter((item) => item.item.id !== productid)
    );
    this.totalItem.set(this.totalItem() - 1);
  }

  increaseItem(productId: number) {
    this.cartItem.update((items) =>
      items.map((p) =>
        p.item.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
    this.totalItem.set(this.totalItem() + 1);
  }

  decreaseItem(productid: number) {
    this.cartItem.update((items) =>
      items
        .map((p) =>
          p.item.id === productid ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
    this.totalItem.set(this.totalItem() - 1);
  }

  getTotalAmount() {
    return computed(() =>
      this.cartItem().reduce((sum, p) => sum + p.item.price * p.quantity, 0)
    );
  }
  ProductTotalAmount() {
    return computed(() =>
      this.cartItem().reduce((sum, p) => p.item.price * p.quantity, 0)
    );
  }
}
