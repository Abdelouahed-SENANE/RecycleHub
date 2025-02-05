import { Component } from '@angular/core';

import { LogoComponent } from '../../../../components/logo/logo.component';
import { RegisterFormComponent } from '../../../../features/auth/components/register-form/register-form.component';

@Component({
  selector: 'app-register',
  imports: [RegisterFormComponent, LogoComponent],
  templateUrl: './register.component.html',
})
export class RegisterComponent {}
