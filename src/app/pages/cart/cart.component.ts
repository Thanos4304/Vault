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
   <div class="min-h-screen bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 py-10">
   <div class="p-6 flex flex-col gap-4">
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