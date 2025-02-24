import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  template: `
  <div class="min-h-screen bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 flex items-center justify-center">
  <div class="bg-white p-8 rounded-lg shadow-lg text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
    <p class="text-lg text-black-600">
      Thank you for shopping with us ❤️
    </p>
    <p class="text-lg text-black-600">
      We appreciate your business and hope you enjoy your purchase!
    </p>
    <p class="text-lg text-black-600 mt-2">
      If you have any questions, feel free to contact us at:
    </p>
    <!-- <p class="text-lg text-gray-600 font-semibold">
      <class="text-blue-500">support@mail.com</a>
    </p> -->
  </div>
</div>
  `,
  styles: [],
  imports: [RouterLink],
})
export class ThankYouComponent {}
