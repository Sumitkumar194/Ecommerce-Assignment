import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  router = inject(Router);
  userName: any = localStorage.getItem('formsValue');
  user: any = JSON.parse(this.userName);
  logout() {
    // localStorage.removeItem('formsValue');
    this.router.navigateByUrl('login');
  }
}
