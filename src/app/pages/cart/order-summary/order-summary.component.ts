import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  imports: [RouterLink],
  template: `
    <div class="bg-slate-100 w-sm p-6 rounded-xl shadow-xl border">
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <span class="text-lg">Total</span>
          <span class="text-lg font-bold">{{ '$ ' + total() }}</span>
        </div>
        <button class="bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition duration-300" routerLink="/thankyou">Proceed to Checkout
        </button>
</div>
    </div>
  `,
  styles: ``,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }

    return total;
  });
}



