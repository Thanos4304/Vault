import { Component, inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [NgIf],
  template: `
    <div class="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 ">
      <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-96 text-center transform transition duration-300 hover:scale-105">
      
        <!-- Profile Image -->
        <div class="flex justify-center">
          <img [src]="avatarUrl" alt="Profile Picture" class="w-24 h-24 rounded-full border-4 border-gray-300 dark:border-gray-600">
        </div>

        <!-- Welcome Message -->
        <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-4">Welcome, {{ username }}</h1>

        <div *ngIf="!username" class="text-red-500 mt-2">
          <p>No user information available.</p>
        </div>

        <!-- Buttons -->
        <div class="flex gap-4 mt-6 justify-center">
          <button (click)="gotocart()" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            My Cart
          </button>
          <button (click)="logout()" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Logout
          </button>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .dark {
      background-color: #1a202c;
      color: white;
    }
  `]
})
export class ProfileComponent implements OnInit {
  router = inject(Router);
  username: string | null = '';
  avatarUrl: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.avatarUrl = `https://i.pravatar.cc/150?u=${this.username}`; // Auto-generated profile pic
  }

  gotocart() {
    this.router.navigate(['/cart']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }
}
