import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { ModalComponent } from "../../components/ui/modal/modal.component";

@Component({
  selector: 'app-content-layout',
  imports: [HeaderComponent, RouterModule],
  template: `
    <div>
      <app-header class="relative"></app-header>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class ContentLayoutComponent {}
