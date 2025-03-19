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
  imports: [
    PrimaryButtonComponent,
    DestructiveButtonComponent,
    RouterLink,
    NgIf,
  ],
  template: `
    <div
      class="bg-black px-4 py-3 shadow-md flex justify-between items-center"
    >
      <div class="flex items-center space-x-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGn2q-dT6Dhf2yUAfJeoJcJag4Tu6SDRoWEQ&s"
          alt="Logo"
          routerLink="/"
          class="h-10 w-auto hover:orange-700 transition duration-300"
        />
        <button
          class="text-3xl text-center font-bold text-white hover:text-orange-700 transition duration-300"
          routerLink="/"
          aria-label="Go to home"
        >
          Vogue Vault
        </button>
      </div>

      <div class="flex items-center space-x-4">
        <ng-container *ngIf="isLoggedIn()">
          <app-primary-button
            label="{{ cartLabel() }}"
            routerLink="/cart"
            aria-label="View cart"
          />
          <button
            class="flex items-center justify-center w-10 h-10 rounded-full bg-FDFAF6 shadow-md hover:bg-gray-100 transition duration-200 ease-in-out border border-gray-300"
            aria-label="User Profile"
            routerLink="/profile"
          >
            <i>👤</i>
          </button>
        </ng-container>

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
  `,
  styles: [],
})
export class HeaderComponent {
  cartService = inject(CartService);
  authService = inject(AuthService);
  router = inject(Router);

  cartLabel = computed(() => {
    const cartItems = this.cartService.cart();
    return `🛒 My Cart [${cartItems ? cartItems.length : 0}]`;
  });

  isLoggedIn = () => this.authService.isAuthenticated();

  logout() {
    this.authService.logout();
  }
}
