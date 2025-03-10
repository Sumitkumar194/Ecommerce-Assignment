import { Component, inject } from '@angular/core';
import { OutletContext, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SearchService } from '../Services/search.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  searchService = inject(SearchService);
  router = inject(Router);
  cartservice = inject(CartService);

  onSerchInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.searchService.setSearchTerm(input);
    this.router.navigate(['/all-product']);
  }

  LoginPage() {
    this.router.navigateByUrl('login');
  }
  Gotohome() {
    this.router.navigateByUrl('Home');
  }
  GoToCart() {
    [this.router.navigateByUrl('view-cart')];
  }
}
