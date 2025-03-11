import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Base URL for the API
  private token: string | null = null;
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  private profileSubject = new BehaviorSubject<any>(null);
  profile$ = this.userSubject.asObservable();


  constructor(private http: HttpClient, private router: Router) {
    // Check for token and username in local storage on initialization
    this.token = localStorage.getItem('access_token');
    const storedUsername = localStorage.getItem('username');

    if (this.token) {
      this.userSubject.next(this.decodeToken(this.token));
    }

    if (storedUsername) {
      this.userSubject.next({ username: storedUsername });
    }
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('access_token', token);
    this.userSubject.next(this.decodeToken(token)); // Update user info
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('access_token');
  }

  register(user: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        this.setToken(response.token); // Assuming the response contains a token
        localStorage.setItem('username', credentials.username); // Store username
        this.userSubject.next({ username: credentials.username }); // Update user state
      })
    );
  }

  getProfile():Observable<any>{
    //const baseHeaders = new HttpHeaders().set('authorization',`Bearer ${this.getToken()}`);
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`)
    }
    return this.http.get(`${this.apiUrl}/profile`,header).pipe(
      tap((response: any) => {
        this.profileSubject.next({profile:response.profile});  
        //console.log(response);
      })
    );
  }

  logout() {
    const cartData = localStorage.getItem('cart');
    const cartItems = cartData ? JSON.parse(cartData) : []; // Ensure correct parsing

  if (cartItems.length > 0) {
    alert(  'You have items in your cart! Are you sure you want to logout?' );

    // if (!confirmLogout) {
    //   return; // Stop logout if user cancels
    // }
  }
    this.token = null;
    this.userSubject.next(null);
    localStorage.removeItem('access_token'); // Remove token
    localStorage.removeItem('username'); // Remove username
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  private decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
    } catch (e) {
      return null;
    }
  }
}
