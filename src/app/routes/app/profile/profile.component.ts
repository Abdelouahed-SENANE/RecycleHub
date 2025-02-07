import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { AuthFacade } from '../../../../features/auth/store/auth.facade';
import { combineLatest } from 'rxjs';
import { UpdateProfileComponent } from '../../../../features/users/components/update-profile.component';
import { ModalComponent } from '../../../../components/ui/modal/modal.component';
import { DeleteUserComponent } from '../../../../features/users/components/delete-user.component';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, UpdateProfileComponent, DeleteUserComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  private readonly authFacade: AuthFacade = inject(AuthFacade);

  isOpen: boolean = true;
  readonly vm$ = combineLatest({
    isLoggedIn: this.authFacade.isLoggedIn$,
    currentUser: this.authFacade.authUser$,
  });

  onLoggedOut(): void {
    this.authFacade.logout();
  }

  onToggle(): void {
    this.isOpen = !this.isOpen;
  }

  openModel() {
    console.log('test');
  }
}
