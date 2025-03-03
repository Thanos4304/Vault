import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-thank-you',
  template: `
<div class="min-h-screen bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-2xl">
       
        <!-- Bill Summary -->
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Your Bill</h3>
        <table class="w-full border-collapse mb-6">
          <thead>
            <tr class="bg-gray-200 text-gray-700">
              <th class="p-2 border">Item</th>
              <th class="p-2 border">Quantity</th>
              <th class="p-2 border">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of billItems" class="text-gray-800">
              <td class="p-2 border">{{ item.name }}</td>
              <td class="p-2 border text-center">{{ item.quantity }}</td>
              <td class="p-2 border text-right">₹{{ item.price }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="font-bold text-gray-800">
              <td class="p-2 border text-right" colspan="2">Total:</td>
              <td class="p-2 border text-right">₹{{ getTotal() }}</td>
            </tr>
          </tfoot>
        </table>

        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                (click)="printBill()">Print Bill</button>
       <br><br><br><br><br>         
     <h2 class="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
        <p class="text-lg text-black-600 mb-4">
          Thank you for shopping with us ❤️
        </p>
        <p class="text-lg text-black-600 mb-4">
          We appreciate your business and hope you enjoy your purchase!
        </p>
        <p class="text-lg text-black-600 mb-6">
          If you have any questions, feel free to contact us at:
          <a href="mailto:contactus@outlook.com" class="text-blue-500">contactus&#64;outlook.com</a>
        </p>

      </div>
    </div>
  `,
  styles: [],
  imports: [NgFor],
})
export class ThankYouComponent {
  billItems = [
    { name: 'Product 1', quantity: 2, price: 500 },
    { name: 'Product 2', quantity: 1, price: 750 },
    { name: 'Product 3', quantity: 3, price: 300 },
  ];

  getTotal() {
    return this.billItems.reduce((total, item) => total + item.price, 0);
  }

  printBill() {
    window.print();
  }
}
