import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ThankYouComponent } from './pages/thankyou/thankyou.component';
import { NewArrivalsComponent } from './pages/newarrivals/newarrivals.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewProdComponent } from './pages/viewprod/viewprod.component';

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
  },
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path:'thankyou',
    component: ThankYouComponent,
  },
  {
    path:'newarr',
    component: NewArrivalsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'viewprod',
    component: ViewProdComponent,
  } 
];