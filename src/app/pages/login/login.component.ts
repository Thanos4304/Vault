import { Component, computed, inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form (submit)="onSubmit()">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" [(ngModel)]="email" name="email"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" id="password" [(ngModel)]="password" name="password"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required />
          </div>
          <button type="submit" routerLink="/plist"
            class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </form>
        <!-- <p class="text-gray-600 text-sm text-center mt-4">
          Don't have an account? <a href="#" class="text-blue-500 hover:underline">Sign up</a>
        </p> -->
      </div>
    </div>
  `,
  styles: [``],
  imports: [FormsModule,RouterLink,PrimaryButtonComponent]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email, 'Password:', this.password);
  }


  cartService = inject(CartService);
  cartLabel = computed(() => {
    const cartItems = this.cartService.cart();
    return `My Cart (${cartItems ? cartItems.length : 0})`;
  });
}
