import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent,ButtonComponent,RouterLink],
  template: `
   <div class="min-h-screen w-sm flex bg-white py-10">
      <div class="p-6 flex flex-col gap-4"> <!-- Changed to flex-col -->
        <button 
        class="block mx-auto my-2 px-4 py-2 text-md bg-orange-500 text-white font-bold rounded-md shadow-lg hover:bg-orange-700 transition-transform transform hover:scale-105"
        style="margin-left: 10px;"
        routerLink="/plist"> <!-- Adjust the routerLink to your desired route -->
          Back
        </button>
        <h2 class="text-2xl font-bold">Your Cart 🛒</h2>
      @for (item of cartService.cart(); track item.id) {
      <app-cart-item [item]="item" />
      }
      <app-order-summary />
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);
}











