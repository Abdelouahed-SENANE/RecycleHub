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
import { getFirstChars } from '../../utils/utils';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, LogoComponent, CommonModule],
  template: `
    @if (vm$ | async; as vm) {
    <nav
      class="p-2 container mx-auto bg-white flex items-center justify-between w-full"
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
            [routerLink]="['/resquets']"
            class="px-3 rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLinkActiveOptions]="{ exact: true }"
            >Requests</a
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
      </ul>
      @if(vm.isLoggedIn) {
      <div class="relative">
        <button
          (click)="onToggle()"
          class="text-sm  flex items-center text-gray-600  text-gray7-700 rounded-full cursor-pointer h-10"
        >
          <i class="bi bi-person-circle text-3xl"></i>
          <p class="w-[100px]">{{ vm.currentUser?.fullname }}</p>
          <i class="bi bi-chevron-down"></i>
        </button>

        <div
          #dropdown
          [ngClass]="{
            'opacity-0 invisible translate-y-2': isOpen,
            'opacity-1 visible translate-y-0': isOpen
          }"
          class="absolute top-[100%] right-0 ease-in duration-300  shadow-[4px_3px_21px_5px_rgba(153,_193,_241,_0.2)] w-48 z-50 bg-white rounded-lg min-w-[200px]"
        >
          <ul>
            <li>
              <a
                routerLink="/users/profile"
                class="px-4 py-2 w flex items-center text-gray-600 gap-2 hover:bg-gray-100 ease-linear duration-300 cursor-pointer "
              >
                <span><i class="bi bi-person-fill-gear text-2xl"></i></span>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                (click)="onLoggedOut()"
                class="px-4 py-2 w-full flex items-center text-gray-600 gap-2 ease-linear duration-300 hover:bg-gray-100 cursor-pointer "
              >
                <span><i class="bi bi-box-arrow-left text-xl"></i></span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      }@else {
      <div>
        <button>
          <a
            class="px-3  bg-primary  text-primary font-bold py-1"
            routerLinkActive="bg-primary text-gray-50"
            routerLink="auth/login"
            [routerLinkActiveOptions]="{ exact: true }"
            >Log In</a
          >
        </button>
        <button>
          <a
            class="px-3 bg-primary block hover:text-primary  rounded-md py-1"
            routerLinkActive="bg-primary text-gray-50"
            [routerLink]="['auth/register']"
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
  isOpen: boolean = false;
  readonly vm$ = combineLatest({
    isLoggedIn: this.authFacade.isLoggedIn$,
    currentUser: this.authFacade.authUser$,
  });

  onLoggedOut() : void {
    this.authFacade.logout()
  }

  onToggle(): void {
    this.isOpen = !this.isOpen;
  }
}
