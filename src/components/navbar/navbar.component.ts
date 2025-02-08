import {
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { AuthFacade } from '../../features/auth/store/auth.facade';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DropdownProfileComponent } from "../dropdown-profile/dropdown-profile.component";

@Component({
  selector: 'app-nav',
  imports: [RouterModule, LogoComponent, CommonModule, DropdownProfileComponent],
  template: `
    @if (vm$ | async; as vm) {
    <nav
      class="p-2 container z-50 mx-auto bg-white flex items-center justify-between w-full"
    >
      <app-logo></app-logo>
      <ul class="flex items-center">
        <li class="mx-2">
          <a
            [routerLink]="['/']"
            class="px-3 rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLinkActiveOptions]="{ exact: true }"
            >Home</a
          >
        </li>

        <li class="mx-2">
          <a
            [routerLink]="['/about']"
            class="px-3 rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLinkActiveOptions]="{ exact: true }"
            >About</a
          >
        </li>
        <li class="mx-2">
          <a
            [routerLink]="['/contact-us']"
            class="px-3 rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLinkActiveOptions]="{ exact: true }"
            >Contact us</a
          >
        </li>
        @if(vm.currentUser?.role === "COLLECTOR") {
          <li class="mx-2">
          <a
            [routerLink]="['/explore-collections']"
            class="px-3 rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLinkActiveOptions]="{ exact: true }"
            >Explore Collections</a
          >
        </li>
        }
      </ul>
      @if(vm.isLoggedIn) {
        <app-dropdown-profile></app-dropdown-profile>
      }@else {
      <div>
        <button>
          <a
            class="px-3  bg-primary  text-primary font-bold py-1"
            routerLinkActive="bg-primary text-gray-50"
            routerLink="/auth/login"
            [routerLinkActiveOptions]="{ exact: true }"
            >Log In</a
          >
        </button>
        <button>
          <a
            class="px-3 bg-primary block hover:text-primary  rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLink]="['/auth/register']"
            [routerLinkActiveOptions]="{ exact: true }"
            >Get Started</a
          >
        </button>
      </div>
      }
    </nav>
    }
  `,
  styles: `
    :host {
    width : 100%;
    display:block;
  }`,
})
export class NavbarComponent {
  private readonly authFacade: AuthFacade = inject(AuthFacade);

  readonly vm$ = combineLatest({
    isLoggedIn: this.authFacade.isLoggedIn$,
    currentUser: this.authFacade.authUser$,
  });
}
