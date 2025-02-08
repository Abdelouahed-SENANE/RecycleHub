import {
  Component,
  
  OnInit,

} from '@angular/core';
import { ModalService } from './modal.service';
import { CommonModule } from '@angular/common';
import { ModalConfig } from './modal.config';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  template: `
    <div
      [ngClass]="{
        'block': open,
        'hidden': !open
      }"
      class="fixed  inset-0"
    >
      <div
        (click)="onDiscard()"
        class="absolute w-full h-full z-10 bg-slate-800/60"
      ></div>
      <div class="w-full h-full flex  items-center justify-center">
        <div class="bg-white min-w-[550px] z-20 rounded-lg p-4">
          <div
            class="flex items-center justify-between py-2 border-b border-gray-200"
          >
            <h1 class="text-lg font-medium text-gray-700">
              {{ config.title }}
            </h1>
            <button (click)="onDiscard()">
              <i class="bi bi-x-lg text-md cursor-pointer text-gray-700"></i>
            </button>
          </div>
          <p class="my-5 text-gray-600">
            {{ config.desc }}
          </p>
          <div class="flex justify-end gap-2">
            <button
              type="button"
              (click)="onDiscard()"
              class="border cursor-pointer border-gray-200 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="button"
              (click)="onConfirm()"
              class="bg-rose-600 cursor-pointer text-white border-gray-200 px-4 py-2 rounded-lg"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  host: {
    class: 'relative',
  },
})
export class ModalComponent implements OnInit {
  get open(): boolean {
    return this.modalService.isOpen;
  }

  get config(): ModalConfig {
    return this.modalService.config;
  }

  constructor(private modalService: ModalService,) {}

  ngOnInit(): void {}

  onDiscard() {
    if (this.config.discard) {
      this.config.discard();
    }
    this.modalService.close();
  }
  
  onConfirm() {
    if (this.config.confirm) {
      this.config.confirm();
    }
    this.modalService.close();
  }
}
