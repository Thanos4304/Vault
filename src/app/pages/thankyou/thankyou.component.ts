import { Component, computed, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-thank-you',
  template: `
    <div class="min-h-screen bg-white flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-2xl">
       
        <!-- Bill Summary -->
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Your Bill</h3>
        <table class="w-full border-collapse mb-6" *ngIf="billItems().length > 0; else noItems">
          <thead>
            <tr class="bg-gray-200 text-gray-700">
              <th class="p-2 border">Product</th>
              <th class="p-2 border">Quantity</th>
              <th class="p-2 border">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of billItems()" class="text-gray-800">
              <td class="p-2 border">{{ item.title }}</td>
              <td class="p-2 border text-center">{{ item.quantity || 1 }}</td>
              <td class="p-2 border text-right">&dollar;{{ item.price }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="font-bold text-gray-800">
              <td class="p-2 border text-right" colspan="2">Total:</td>
              <td class="p-2 border text-right">&dollar;{{ getTotal() }}</td>
            </tr>
          </tfoot>
        </table>

        <!-- No items message -->
        <ng-template #noItems>
          <p class="text-lg text-gray-700">Your cart is empty!</p>
        </ng-template>

        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
                (click)="printBill()">Print Bill</button>

        <br><br><br><br><br>         
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
        <p class="text-lg text-gray-600 mb-4">
          Thank you for shopping with us ❤️
        </p>
        <p class="text-lg text-gray-600 mb-4">
          We appreciate your business and hope you enjoy your purchase!
        </p>
        <p class="text-lg text-gray-600 mb-6">
          If you have any questions, feel free to contact us at:
          <a href="mailto:contactus@outlook.com" class="text-blue-500">contactus&#64;outlook.com</a>
        </p>

      </div>
    </div>
  `,
  styles: [],
  imports: [NgFor, NgIf],
})
export class ThankYouComponent {
  private cartService = inject(CartService);

  // Use computed signal to always reflect current cart state
  billItems = computed(() => this.cartService.cart());

  getTotal() {
    return this.billItems().reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  }

  printBill() {
    window.print();
  }
}
