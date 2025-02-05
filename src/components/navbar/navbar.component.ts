import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, LogoComponent],
  template: `
    <nav class="p-2 container mx-auto flex items-center justify-between w-full">
      <app-logo></app-logo>
      <ul class="flex items-center">
        <li class="mx-2">
          <a
            [routerLink]="['/']"
            class="px-3 rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLinkActiveOptions]="{exact : true}"
            >Home</a
          >
        </li>
        <li class="mx-2">
          <a
            [routerLink]="['/resquets']"
            class="px-3 rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLinkActiveOptions]="{exact : true}"
            >Requests</a
          >
        </li>
        <li class="mx-2">
          <a
            [routerLink]="['/about']"
            class="px-3 rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLinkActiveOptions]="{exact : true}"
            >About</a
          >
        </li>
        <li class="mx-2">
          <a
            [routerLink]="['/contact-us']"
            class="px-3 rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLinkActiveOptions]="{exact : true}"
            >Contact us</a
          >
        </li>
      </ul>
      <div>
        <button>
          <a
            class="px-3  bg-primary  text-primary font-bold py-1"
            routerLinkActive="bg-primary text-gray-50"
            routerLink="auth/login"
            [routerLinkActiveOptions]="{exact : true}"
            >Log In</a
          >
        </button>
        <button>
          <a
            class="px-3 bg-primary block hover:text-primary  rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLink]="['auth/register']"
            [routerLinkActiveOptions]="{exact : true}"
            >Get Started</a
          >
        </button>
      </div>
    </nav>
  `,
  styles: `
    :host {
    width : 100%;
    display:block;
  }`,
})
export class NavbarComponent {}
