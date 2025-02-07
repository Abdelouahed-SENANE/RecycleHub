import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from "../../app/routes/auth/login/login.component";
import { LogoComponent } from "../logo/logo.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent , CommonModule],
  template: `
  <header class=" z-50 relative shadow shadow-slate-100 h-14 flex items-center text-gray-700" >
      <app-nav></app-nav>
  </header>
  `,
  host : {class : 'w-full block z-50'},

})
export class HeaderComponent {

}
