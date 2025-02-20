import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <button
        class="text-2xl font-bold text-gray-800 hover:text-blue-600"
        routerLink="/"
        aria-label="Go to home"
      >
        Vouge Vault
      </button>
      <div class="flex items-center space-x-4">
        <app-primary-button
          label="{{ cartLabel() }}"
          routerLink="/cart"
          aria-label="View cart"
        />
        <app-primary-button
          label="Login"
          routerLink="/login"
          aria-label="Login"
        />
      </div>
    </div>
    <hr class="border-t border-gray-300" />
  `,
  styles: [],
})
export class HeaderComponent {
  cartService = inject(CartService);

  cartLabel = computed(() => {
    const cartItems = this.cartService.cart();
    return `My Cart (${cartItems ? cartItems.length : 0})`;
  });
}
