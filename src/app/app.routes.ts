import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AllProductComponent } from './components/pages/all-product/all-product.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ViewcartComponent } from './components/pages/viewcart/viewcart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddTocartComponent } from './components/pages/add-tocart/add-tocart.component';
import { AuthComponent } from './components/pages/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'all-product',
        component: AllProductComponent,
      },
      {
        path: 'Home',
        component: HomeComponent,
      },
      {
        path: 'view-cart',
        component: ViewcartComponent,
      },
      {
        path: 'Sproduct/:id',
        component: AddTocartComponent,
      },
      {
        path: 'auth-user',
        component: AuthComponent,
      },
    ],
  },
];
