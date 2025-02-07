import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../components/ui/modal/modal.component';
import { ModalService } from '../../../components/ui/modal/modal.service';
import { UserFacade } from '../store/user.facade';
import { AuthFacade } from '../../auth/store/auth.facade';
import { combineLatest, map } from 'rxjs';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-delete-user',
  imports: [ModalComponent],
  template: `
    <div>
      <app-modal></app-modal>
      <button
        type="button"
        (click)="openModel()"
        class="cursor-pointer disabled:bg-secondary block bg-red-500 text-white py-2 px-4 rounded-full font-semibold"
      >
        Delete Account
      </button>
    </div>
  `,
})
export class DeleteUserComponent implements OnInit{
  private readonly modalService : ModalService = inject(ModalService)
  private readonly userFacade : UserFacade = inject(UserFacade)
  private readonly authFacade : AuthFacade = inject(AuthFacade)
  currentUser! : User

  ngOnInit(): void {
      this.authFacade.authUser$.subscribe((authUser) => {
        authUser !== undefined ? this.currentUser = authUser : undefined
      })
  }
  openModel() {
    this.modalService.open({
      title: 'Delete account',
      desc: 'Are you sure to delete this account.',
      confirm : this.onDeleteAccount
    });
  }

  onDeleteAccount() : void {
    console.log("Test on delete " + this.currentUser.id);
    this.userFacade.deleteAccount(this.currentUser.id)
  }



}
