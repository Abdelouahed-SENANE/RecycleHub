import { Injectable } from '@angular/core';
import { ModalConfig } from './modal.config';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  _isOpen = true;
  _config = new ModalConfig();

  get isOpen(): boolean {
    return this._isOpen;
  }

  get config(): ModalConfig {
    return this._config; 
  }

  constructor() {}

  open(config: ModalConfig) {
    console.log('Open modal...');
    this._isOpen = true; 
    this._config = { ...this._config, ...config };
  }

  close(): void {
    console.log('Closing modal...');
    this._isOpen = false; 
    this._config = new ModalConfig(); 
  }
}
