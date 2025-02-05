import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from "../../app/routes/auth/login/login.component";
import { LogoComponent } from "../logo/logo.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent ],
  template: `
  <header class="shadow  shadow-slate-100 h-14 flex items-center">
      <app-nav></app-nav>
  </header>
  `,
  styles : `
  :host {
    width : 100%;
    display:block;
  }
  `
})
export class HeaderComponent {}
