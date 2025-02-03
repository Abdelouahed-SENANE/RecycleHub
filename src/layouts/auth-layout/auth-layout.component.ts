import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterModule } from '@angular/router';
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-auth-layout',
  imports: [RouterModule],
  templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent {

}
