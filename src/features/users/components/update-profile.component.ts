import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AuthFacade } from '../../auth/store/auth.facade';
import { User } from '../../../models/user.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FieldErrorMessage } from '../../../components/errors/field-error-message/field-error.component';
import { RouterModule } from '@angular/router';
import { UserFacade } from '../store/user.facade';
import { DeleteUserComponent } from './delete-user.component';
import { ModalService } from '../../../components/ui/modal/modal.service';
import { ModalComponent } from '../../../components/ui/modal/modal.component';

@Component({
  selector: 'app-update-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldErrorMessage,
    RouterModule,
    DeleteUserComponent
],
  template: `
    @if (vm$ | async; as vm) {

    <div class="container mx-auto">
      <div
        class="border shadow-xs my-10 shadow-gray-100 border-gray-100 py-8 px-14 rounded-xl"
      >
        <h2 class="text-xl font-medium text-gray-700 ">
          Welcome, {{ vm.currentUser?.fullname || 'there' }}! We're thrilled to
          have you here
        </h2>
      </div>

      <div
        class="border shadow-xs my-10 shadow-gray-100 border-gray-100 py-8 px-14 rounded-xl"
      >
        <h1 class="text-2xl my-2 font-medium text-gray-700">
          Update your profile.
        </h1>
        @if (vm.success) {
        <div class="text-green-500  bg-green-100 p-2 rounded-md">
          <i class="bi bi-info-circle text-lg"></i>
          <span class="px-2">{{ vm.success }}</span>
        </div>
        }
        <form
          class="my-4"
          [formGroup]="updateProfileForm"
          (ngSubmit)="updateProfileForm.valid && onSubmit()"
        >
          @if (vm.error) {
          <div class="text-rose-500  bg-rose-100 p-2 rounded-md">
            <i class="bi bi-info-circle text-lg"></i>
            <span class="px-2">{{ vm.error }}</span>
          </div>
          }

          <div class="flex items-center gap-6">
            <div class="my-4 flex-1">
              <div class="form_control w-full text-gray-300 relative">
                <span class="absolute top-[50%] translate-y-[-50%] left-4">
                  <i class="bi bi-person text-xl"></i>
                </span>
                <input
                  type="fullname"
                  placeholder="Fullname"
                  formControlName="fullname"
                  [ngClass]="{
                    'border-rose-500 focus:text-rose-500 focus:border-rose-500 ':
                      updateProfileForm.get('fullname')?.invalid &&
                      updateProfileForm.get('fullname')?.touched,
                    'border-gray-300':
                      !updateProfileForm.get('fullname')?.invalid ||
                      !updateProfileForm.get('fullname')?.touched
                  }"
                  class="pl-10 text-gray-500 focus:text-primary border-[3px] border-gray-100 focus:border-primary transition-colors ease-linear rounded-full placeholder:text-gray-300 w-full outline-none py-2 pr-2"
                />
              </div>
              <app-fields-error-message
                [label]="'Fullname'"
                [control]="updateProfileForm.get('fullname')"
              ></app-fields-error-message>
            </div>
            <div class="my-4 flex-1">
              <div class="form_control w-full text-gray-300 relative">
                <span class="absolute top-[50%] translate-y-[-50%] left-4">
                  <i class="bi bi-geo-alt"></i>
                </span>
                <input
                  type="address"
                  placeholder="Address"
                  formControlName="address"
                  [ngClass]="{
                    'border-rose-500 focus:text-rose-500 focus:border-rose-500 ':
                      updateProfileForm.get('address')?.invalid &&
                      updateProfileForm.get('address')?.touched,
                    'border-gray-300':
                      !updateProfileForm.get('address')?.invalid ||
                      !updateProfileForm.get('address')?.touched
                  }"
                  class="pl-10 text-gray-500 focus:text-primary border-[3px] border-gray-100 focus:border-primary transition-colors ease-linear rounded-full placeholder:text-gray-300 w-full outline-none py-2 pr-2"
                />
              </div>
              <app-fields-error-message
                [label]="'Address'"
                [control]="updateProfileForm.get('address')"
              ></app-fields-error-message>
            </div>
          </div>

          <div class="flex items-center gap-6">
            <div class="my-4 flex-1">
              <div class="form_control w-full text-gray-300 relative">
                <span class="absolute top-[50%] translate-y-[-50%] left-4">
                  <i class="bi bi-calendar2-day"></i>
                </span>
                <input
                  type="date"
                  placeholder="Birthday"
                  formControlName="birthday"
                  [ngClass]="{
                    'border-rose-500 focus:text-rose-500 focus:border-rose-500 ':
                      updateProfileForm.get('birthday')?.invalid &&
                      updateProfileForm.get('birthday')?.touched,
                    'border-gray-300':
                      !updateProfileForm.get('birthday')?.invalid ||
                      !updateProfileForm.get('birthday')?.touched
                  }"
                  class="pl-10 text-gray-500 focus:text-primary border-[3px] border-gray-100 focus:border-primary transition-colors ease-linear rounded-full placeholder:text-gray-300 w-full outline-none py-2 pr-2"
                />
              </div>
              <app-fields-error-message
                [label]="'Birthday'"
                [control]="updateProfileForm.get('birthday')"
              ></app-fields-error-message>
            </div>
            <div class="my-4 flex-1">
              <div class="form_control w-full text-gray-300 relative">
                <span class="absolute top-[50%] translate-y-[-50%] left-4">
                  <i class="bi bi-envelope-at"></i>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  readonly
                  formControlName="email"
                  class="pl-10 text-gray-500 focus:text-primary border-[3px] border-gray-100 focus:border-primary transition-colors ease-linear rounded-full placeholder:text-gray-300 w-full outline-none py-2 pr-2"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center gap-6">
            <div class="my-4 flex-1">
              <div class="form_control w-full text-gray-300 relative">
                <span class="absolute top-[50%] translate-y-[-50%] left-4">
                  <i class="bi bi-shield-lock"></i>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  formControlName="password"
                  [ngClass]="{
                    'border-rose-500 focus:text-rose-500 focus:border-rose-500 ':
                      updateProfileForm.get('password')?.invalid &&
                      updateProfileForm.get('password')?.touched,
                    'border-gray-300':
                      !updateProfileForm.get('password')?.invalid ||
                      !updateProfileForm.get('password')?.touched
                  }"
                  class="pl-10 text-gray-500 focus:text-primary border-[3px] border-gray-100 focus:border-primary transition-colors ease-linear rounded-full placeholder:text-gray-300 w-full outline-none py-2 pr-2"
                />
              </div>
              <app-fields-error-message
                [label]="'Password'"
                [control]="updateProfileForm.get('password')"
              ></app-fields-error-message>
            </div>
            <div class="my-4 flex-1">
              <div class="form_control w-full text-gray-300 relative">
                <span class="absolute top-[50%] translate-y-[-50%] left-4">
                  <i class="bi bi-shield-lock"></i>
                </span>
                <input
                  type="password"
                  placeholder="Confirm password"
                  formControlName="password"
                  [ngClass]="{
                    'border-rose-500 focus:text-rose-500 focus:border-rose-500 ':
                      updateProfileForm.get('password')?.invalid &&
                      updateProfileForm.get('password')?.touched,
                    'border-gray-300':
                      !updateProfileForm.get('password')?.invalid ||
                      !updateProfileForm.get('password')?.touched
                  }"
                  class="pl-10 text-gray-500 focus:text-primary border-[3px] border-gray-100 focus:border-primary transition-colors ease-linear rounded-full placeholder:text-gray-300 w-full outline-none py-2 pr-2"
                />
              </div>
              <app-fields-error-message
                [label]="'Password'"
                [control]="updateProfileForm.get('password')"
              ></app-fields-error-message>
            </div>
          </div>

          <div class="my-4 flex items-center justify-between ">
            <div class="flex items-center gap-2">
              <button
                type="submit"
                [disabled]="vm.isLoading"
                class="cursor-pointer disabled:bg-secondary block bg-primary text-white py-2 px-4 rounded-full font-semibold"
              >
                Save Change
              </button>
              <div>
                <a
                  class="cursor-pointer  border-2 px-4 border-gray-300 text-gray-800 py-2 rounded-full font-semibold"
                  routerLink="/"
                  >Cancel</a
                >
              </div>
            </div>
              <app-delete-user></app-delete-user>
          </div>
        </form>
      </div>
    </div>

    }
  `,
})
export class UpdateProfileComponent implements OnInit {
  private readonly authFacade: AuthFacade = inject(AuthFacade);
  private readonly userFacade: UserFacade = inject(UserFacade);
  existsUser!: User;
  errorMsg!: string;
  updateProfileForm: FormGroup;
  // @Output() openModalEvent : EventEmitter<void> = new EventEmitter<void>()

  constructor(private fb: FormBuilder) {
    this.updateProfileForm = this.fb.group({
      id: [''],
      fullname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      address: ['', [Validators.required, Validators.minLength(5)]],
      birthday: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.vm$.subscribe((vm) => {
      if (vm.currentUser) {
        this.setFormValues(vm.currentUser);
      }
    });
  }

  vm$ = combineLatest({
    isLoading: this.userFacade.isLoading$,
    currentUser: this.authFacade.authUser$,
    error: this.userFacade.error$,
    success: this.userFacade.success$,
  });

  setFormValues(user: User): void {
    this.updateProfileForm.patchValue(user);
  }

  onSubmit() {
    this.userFacade.updateProfile(this.updateProfileForm.value);
  }



  ngOnInit(): void {}
}
