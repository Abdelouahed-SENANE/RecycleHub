import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from "../../../../components/ui/modal/modal.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, ModalComponent],
  templateUrl: './home.component.html',
  host: { class: 'z-10' },
})
export class HomeComponent {}
