import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  template: `
    <div class="my-4">
      <button
        (click)="handleClick()"
        [type]="type"
        [disabled]="disbled"
        class="w-full bg-primary cursor-pointer flex items-center justify-center text-white py-2 rounded-full font-semibold"
      >
        {{ text }}
      </button>
    </div>
  `,
})
export class ButtonComponent {
  @Input({ required: true }) type!: string;
  @Input({ required: true }) text!: string;
  @Input() icon!: string;
  @Input() disbled!: boolean;

  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.click.emit();
  }
}
