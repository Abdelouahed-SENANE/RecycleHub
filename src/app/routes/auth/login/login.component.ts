import { Component } from '@angular/core';
import { LoginFormComponent } from '../../../../features/auth/components/login-form/login-form.component';
import { LogoComponent } from '../../../../components/logo/logo.component';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, LogoComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
