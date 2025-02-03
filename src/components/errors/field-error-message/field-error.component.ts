import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-fields-error-message',
  imports: [CommonModule],
  template: `
    <div *ngIf="control?.touched && getFieldErrors().length > 0">
      <div *ngFor="let error of getFieldErrors()" class="px-2 text-red-500 text-sm">
        {{ error }}
      </div>
    </div>
  `,
})
export class FieldErrorMessage {
  @Input() control: AbstractControl | null = null; // The form control passed from parent
  @Input() label: string = ''; // The label passed from the parent component

  getFieldErrors(): string[] {
    const errors: string[] = [];
    if (this.control?.touched) {
      if (this.control?.hasError('required')) {
        errors.push(
          `${this.label} is required.`
        );
      }
      if (this.control?.hasError('email')) {
        errors.push('Invalid email format.');
      }
      if (this.control?.hasError('minlength')) {
        errors.push(
          `Minimum length is ${this.control?.errors?.['minlength'].requiredLength} characters.`
        );
      }
    }
    return errors;
  }
}
