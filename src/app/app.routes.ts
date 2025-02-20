import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'plist',
    pathMatch: 'full',
    component: ProductsListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  }
];