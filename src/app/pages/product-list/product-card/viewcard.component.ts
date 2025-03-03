import { Component, input } from '@angular/core';
import { Product } from '../product-list.component';

@Component({
  selector: 'app-view-card',
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm">{{ '$' + product().price }}</span>
      </div>

      <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'"
      >
        {{ product().stock ? product().stock + ' left' : 'Out of Stock' }}
      </span>
    </div>
  `,
  styles: ``,
})
export class ViewCardComponent {
  product = input.required<Product>();
}
