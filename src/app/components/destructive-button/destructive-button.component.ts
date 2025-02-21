import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-destructive-button',
  template: `
    <button
      (click)="onClick.emit()"
      class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
    >
      {{ label }}
    </button>
  `,
  styles: [],
})
export class DestructiveButtonComponent {
  @Input() label: string = 'Destructive Action';
  @Output() onClick = new EventEmitter<void>();
}
