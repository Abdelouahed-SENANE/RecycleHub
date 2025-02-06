import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldErrorMessage } from '../../../../components/errors/field-error-message/field-error.component';
import { AuthRequest } from '../../../../models/auth.model';
import { ButtonComponent } from '../../../../components/ui/button/button.component';
import { AuthFacade } from '../../store/auth.facade';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-login-form',
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FieldErrorMessage,
    ButtonComponent,
  ],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private readonly authFacade : AuthFacade = inject(AuthFacade)
  loginForm: FormGroup;
  credentiels: AuthRequest = { email: '', password: '' };

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  readonly vm$ = combineLatest({
    isLoading : this.authFacade.isLoading$,
    hasError : this.authFacade.hasError$,
    error : this.authFacade.error$
  })

  onSubmit() {
    this.credentiels = this.loginForm.value
    this.authFacade.login(this.credentiels)
  }
}
