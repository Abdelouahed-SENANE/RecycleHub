import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FieldErrorMessage } from '../../../../../components/errors/field-error-message/field-error.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [RouterModule , CommonModule , FieldErrorMessage , ReactiveFormsModule],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  registerForm : FormGroup

  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      fullname: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      address: [
        '',
        [Validators.required, Validators.minLength(5)]
      ],
      birthday: [
        '',
        [Validators.required]
      ],
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ]
    });
  }

  onSubmit() {
    if(this.registerForm.valid){
      console.log("Birthday " + this.registerForm.get("birthday")?.value);
      
    }
  }
}
