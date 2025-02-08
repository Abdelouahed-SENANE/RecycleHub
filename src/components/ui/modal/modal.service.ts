import { Injectable } from '@angular/core';
import { ModalConfig } from './modal.config';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  _isOpen = false;
  _config = new ModalConfig();

  get isOpen(): boolean {
    return this._isOpen;
  }

  get config(): ModalConfig {
    return this._config; 
  }

  constructor() {}

  open(config: ModalConfig) {
    this._config = { ...this._config, ...config };
    this._isOpen = true; 
  }

  close(): void {
    this._config = new ModalConfig(); 
    this._isOpen = false; 

  }
}
