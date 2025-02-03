import { Component } from '@angular/core';
import { RegisterFormComponent } from "../../../../features/auth/register/components/register-form/register-form.component";
import { LoginComponent } from "../login/login.component";
import { LogoComponent } from "../../../../components/logo/logo.component";

@Component({
  selector: 'app-register',
  imports: [RegisterFormComponent, LogoComponent],
  templateUrl: './register.component.html',
})
export class RegisterComponent {

}
