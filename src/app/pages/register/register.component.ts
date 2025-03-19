// register.component.ts
import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import {  Router, RouterLink, } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  template: `   
      <div class="flex items-center justify-center min-h-screen bg-white via-pink-300 to-yellow-300">
      <div class="bg-white p-6 rounded shadow-md w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form (ngSubmit)="onSubmit()" #registerForm="ngForm">
          <div class="mb-4">
            <label
              class="block text-sm font-medium text-gray-700"
              for="username"
              >Username</label
            >
            <input
              type="text"
              id="username"
              name="username"
              required
              [(ngModel)]="user.username"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700" for="email"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              required
              [(ngModel)]="user.email"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-sm font-medium text-gray-700"
              for="password"
              >Password</label
            >
            <input
              type="password"
              id="password"
              name="password"
              required
              [(ngModel)]="user.password"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <p *ngIf="errorMessage" class="mt-4 text-red-500 text-center mb-2">{{ errorMessage }}</p>
          <button class="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition duration-300">
            Register
          </button>
        </form>
        <p class="text-gray-600 text-sm text-center mt-4">
          Already have an account? <a routerLink="/login" class="text-blue-500">Sign In</a>
        </p>
      </div>
    </div>
  `,
  styles: [],
  imports: [FormsModule, RouterLink,NgIf],
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
  };
  errorMessage: string | null = null; // Property to hold error messages

  authService = inject(AuthService);
  
  constructor( private router: Router){}

  onSubmit() {
    this.authService.register(this.user).subscribe({
      next: (response: any) => {
        console.log('Registration successful:', response);
        
        this.authService.setToken(response.token);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.errorMessage = 'Registration failed. Please try again.'; // Set error message
      },
    });
  }
}
