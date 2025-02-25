import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgIf],
  template: `
      <div class="min-h-screen bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 p-6">
       <h1 class="text-gray-900 text-center text-4xl font-bold mb-4 ">
         Welcome to Vogue Vault 
       </h1>
       <p class="text-center text-lg text-black-800 mb-6 font-semibold">
         🛍️ Shop the best products at unbeatable prices!</p>
      <button (click)="onShopNow()" 
      class="block mx-auto my-5 px-6 py-3 text-lg bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
       🚀 Shop Now</button>

       <!-- about us begins here -->
       <section class="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 p-6 rounded-lg shadow-lg mb-6">
        <h2 class="text-2xl font-bold text-center mb-4">💡 About Us</h2>
        <p class="text-black-700 text-justify text-lg leading-relaxed">
          Welcome to our e-commerce store, where we bring you the best products
          at unbeatable prices! Our mission is to provide a seamless shopping
          experience, offering a wide range of high-quality items that cater to
          all your needs. Whether you're looking for the latest gadgets, stylish
          apparel, or home essentials, we have something for everyone.
        </p>
        <p class="text-black-700 text-justify text-lg mt-4 leading-relaxed">
          Our dedicated team works tirelessly to curate the best selection of
          products, ensuring that you receive only the finest quality. We
          believe in customer satisfaction and strive to exceed your
          expectations with every purchase. Thank you for choosing us as your
          go-to online store!
        </p>
        <p class="text-black-700 text-justify text-lg mt-4 leading-relaxed">
          We are committed to sustainability and ethical sourcing, ensuring that
          our products not only meet your needs but also contribute positively
          to the environment. Join us on this journey to make shopping a more
          responsible and enjoyable experience!
        </p>
      </section>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  <!-- Special Offers Section -->
  <div class="bg-red-200 p-4 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold"> 🔥 Special Offers</h2>
    <p>Get up to 50% off on selected items!</p>
    <ul class="mt-2">
      <li>✔ Electronics: Up to 30% off on smartphones and accessories</li>
      <li>✔ Fashion: Buy one, get one 50% off on selected apparel</li>
      <li>✔ Home Goods: 20% off on kitchen appliances</li>
      <li>✔ Seasonal Sale: Extra 10% off on clearance items</li>
    </ul>
    <p class="mt-4 font-bold"><br>Hurry, these offers are valid for a limited time only!</p>
    <!-- <button
      class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      routerLink="/plist"
    >
      View All Offers
    </button> -->
  </div>

  <!-- New Arrivals Section -->
  <div class="bg-green-200 p-4 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold">🆕 New Arrivals</h2>
    <p>Discover the latest products just added to our store!</p>
    <ul class="mt-2">
      <li>✔ Smartwatch: Stay connected with our new smartwatch collection</li>
      <li>✔ Summer Fashion: Explore our vibrant summer clothing line</li>
      <li>✔ Home Decor: Freshen up your space with our new decor items</li>
      <li>✔ Fitness Gear: Get fit with our latest workout equipment</li>
    </ul>
    <p class="mt-4 font-bold"><br>Be the first to grab these exciting new products!</p>
    <!-- <button
      class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      routerLink="/plist"
    >
      Shop New Arrivals
    </button> -->
  </div>

  <!-- Best Sellers Section -->
  <div class="bg-yellow-200 p-4 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold">🏆 Best Sellers</h2>
    <p>Check out our most popular products loved by customers!</p>
    <ul class="mt-2">
      <li>✔ Wireless Earbuds: Experience sound like never before</li>
      <li>✔ Eco-Friendly Water Bottles: Stay hydrated sustainably</li>
      <li>✔ Trendy Backpacks: Perfect for school or travel</li>
      <li>✔ Skincare Essentials: Pamper yourself with our best-selling products</li>
    </ul>
    <p class="mt-4 font-bold"><br>Join the trend and see what everyone is raving about!</p>
    <!-- <button
      class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      routerLink="/plist"
    >
      View Best Sellers
    </button> -->
  </div>
</div>


<!-- Customer Testimonials Section -->

<section class="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 p-6 rounded-lg shadow-lg mb-6">
  <h2 class="text-2xl font-bold text-center mb-4">💬 Customer Testimonials</h2>
  <p class="text-black-700 text-lg italic">
    "Great service and quality! I was pleasantly surprised by how quickly my
    order arrived, and the products exceeded my expectations."
  </p>
  <p class="text-black-700 text-lg text-right">- Jane Doe</p>
  <p class="text-black-700 text-lg italic mt-4">
    "I love my new products! The selection is fantastic, and I appreciate
    the attention to detail in packaging. Will definitely shop here again!"
  </p>
  <p class="text-black-700 text-lg text-right">- John Smith</p>
  <p class="text-black-700 text-lg italic mt-4">
    "The customer support team was incredibly helpful when I had questions
    about my order. They made the whole process smooth and enjoyable!"
  </p>
  <p class="text-black-700 text-lg text-right">- Emily Johnson</p>
</section>


      <!-- Newsletter Signup Section
      <section class="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-2xl font-bold text-center mb-4">Subscribe to Our Newsletter</h2>
        <p class="text-gray-700 text-lg text-center mb-4">
          Stay updated with our latest offers and products!
        </p>
        <form class="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            class="border p-2 rounded-l"
            required
          />
          <button
            type="submit"
            class="bg-blue-600 text-white p-2 rounded-r"
          >
            Subscribe
          </button>
        </form>
      </section> -->

      <footer class="text-center mt-6">
        <p class="text-black-600 font-bold ">
          © 2025 Vogue Vault. All rights reserved.
        </p>
      </footer>
    </div>
  `,
  styles: [],
})

export class HomeComponent {
  authService = inject(AuthService);
  router = inject(Router);

  onShopNow() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/plist']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  isLoggedIn() {
    return this.authService.isAuthenticated();
  }
}
 





















 
   













