import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class=" block mx-auto my-2 px-4 py-2 text-md bg-orange-500 text-white font-bold rounded-md shadow-lg hover:bg-orange-700 transition-transform transform hover:scale-105"
      (click)="btnClicked.emit()"
    >
      <span class="text-md">{{ label() }}</span>
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input<string>();

  btnClicked = output();
}





   
       