import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { DestructiveButtonComponent } from '../destructive-button/destructive-button.component';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent, DestructiveButtonComponent, RouterLink, NgIf],
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

        <!-- Conditional rendering based on auth state -->
        <ng-container *ngIf="isLoggedIn(); else loginTemplate">
          <app-destructive-button
            label="Sign Out"
            (onClick)="logout()"
          ></app-destructive-button>
        </ng-container>

        <ng-template #loginTemplate>
          <app-primary-button
            label="Login"
            routerLink="/login"
            aria-label="Login"
          />
        </ng-template>
      </div>
    </div>
    <hr class="border-t border-gray-300" />
  `,
  styles: [],
})
export class HeaderComponent {
  cartService = inject(CartService);
  authService = inject(AuthService);
  router = inject(Router);

  cartLabel = computed(() => {
    const cartItems = this.cartService.cart();
    return `My Cart (${cartItems ? cartItems.length : 0})`;
  });

  isLoggedIn = () => this.authService.isAuthenticated();

  logout() {
    this.authService.logout();
  }
}
