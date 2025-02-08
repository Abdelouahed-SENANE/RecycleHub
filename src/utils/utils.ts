import { v4 as uuid4 } from 'uuid';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function combinedDateTimeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const date = control.get('date')?.value;
    const time = control.get('time')?.value;

    if (!date || !time) return null;

    const selectedDateTime = new Date(`${date}T${time}`);
    const startOfDay = new Date(selectedDateTime);
    startOfDay.setHours(9, 0, 0, 0); // 09:00 AM
    const endOfDay = new Date(selectedDateTime);
    endOfDay.setHours(18, 0, 0, 0); // 06:00 PM

    if (selectedDateTime < startOfDay || selectedDateTime > endOfDay) {
      return { timeOutOfRange: 'Time must be between 09:00 and 18:00' };
    }
    return null;
  }
}

export const generateUUID = () => {
  return uuid4();
};

