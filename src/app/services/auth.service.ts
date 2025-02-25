// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Base URL for the API
  private token: string | null = null;
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    // Check for token in local storage on initialization
    this.token = localStorage.getItem('token');
    if (this.token) {
      // Optionally, you can decode the token to get user info and set it
      this.userSubject.next(this.decodeToken(this.token));
    }
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('access_token', token);
  }
  getToken(): string | null {
    return this.token || localStorage.getItem('access_token');
  }

  register(user: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout() {
    this.token = null;
    this.userSubject.next(null);
    localStorage.removeItem('access_token'); // ✅ Correct key here
    this.router.navigate(['/login']);
  }
  
  isAuthenticated(): boolean {
    return this.getToken() !== null; // ✅ Using getToken method
  }
  
  private decodeToken(token: string): any {
    // Implement your token decoding logic here (e.g., using jwt-decode library)
    // This is just a placeholder for demonstration purposes
    return JSON.parse(atob(token.split('.')[1])); // Decode the payload
  }
}

