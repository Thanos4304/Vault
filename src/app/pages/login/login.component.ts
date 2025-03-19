import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="flex items-center justify-center min-h-screen bg-white">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        <form (ngSubmit)="onSubmit()" #registerForm="ngForm">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium mb-2">Username</label>
            <input type="text" id="email" [(ngModel)]="user.username" name="email"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" id="password" [(ngModel)]="user.password" name="password"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required />
          </div>
          <p *ngIf="errorMessage" class="mt-4 text-red-500 text-center mb-2">{{ errorMessage }}</p>
          <button type="submit"
            class="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition duration-300">
            Login
          </button>
        </form>
        <p class="text-gray-600 text-sm text-center mt-4">
          Don't have an account? <a href="/register" class="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  `,
  styles: [``],
  imports: [FormsModule, RouterLink, NgIf]
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };
  errorMessage: string | null = null; // Property to hold error messages

  authService = inject(AuthService);
  
  constructor(private router: Router) {}

  onSubmit() {
    this.authService.login(this.user).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        
        this.authService.setToken(response.token);
        this.router.navigate(['/plist']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Login failed. Please try again.'; // Set error message
      },
    });
  }
}
