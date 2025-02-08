import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FieldErrorMessage } from '../../../../components/errors/field-error-message/field-error.component';
import { User } from '../../../../models/models';
import { combineLatest } from 'rxjs';
import { RoleType } from '../../../../utils/constants';
import { AuthFacade } from '../../store/auth.facade';
import { UserService } from '../../../users/api/users.service';
import { generateUUID } from '../../../../utils/utils';

@Component({
  selector: 'app-register-form',
  imports: [RouterModule, CommonModule, FieldErrorMessage, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  private readonly authFacade: AuthFacade = inject(AuthFacade);
  private readonly userService: UserService = inject(UserService);
  newUser!: User;
  errorMsg!: string;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      address: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+\s*,\s*[a-zA-Z\s]+(,\s*[a-zA-Z\s]+)?$/),
        ],
      ],
      birthday: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  readonly vm$ = combineLatest({
    isLoading: this.authFacade.isLoading$,
    hasError: this.authFacade.hasError$,
    authError: this.authFacade.error$,
  });

  onSubmit() {
    this.newUser = { ...this.registerForm.value };
    this.newUser.id = generateUUID();
    this.newUser.role = RoleType.INDIVIDUAL;
    this.userService.existByEmail(this.newUser.email).subscribe({
      next: (isExist) => {
        if (!isExist) {
          this.authFacade.register(this.newUser);
        } else {
          this.errorMsg = 'Email already exists';
        }
      },
      error: (err) => {
        console.error('Error checking email:', err);
      },
    });
  }
}
