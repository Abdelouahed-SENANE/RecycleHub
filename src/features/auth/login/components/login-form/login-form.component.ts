import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldErrorMessage } from '../../../../../components/errors/field-error-message/field-error.component';
import { AuthRequest } from '../../../../../models/auth.model';

@Component({
  selector: 'app-login-form',
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FieldErrorMessage,
  ],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  loginForm: FormGroup;
  authRequest : AuthRequest = {email : '' , password : ''}

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authRequest.email = this.loginForm.get('email')?.value
      this.authRequest.password = this.loginForm.get('password')?.value
      
    }
  }
}
