import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      localStorage.setItem(key, value as string);
    }
  }

  getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    try {
      if (!value) {
        return null;
      }
      return JSON.parse(value as string) as T;
    } catch (err) {
      console.error(
        `Error retrieving item with key "${key}" from localStorage:`,
        err
      );
      return null;
    }
  }

  removeItem(key: string): boolean {
    try {
      const isExists = localStorage.getItem(key) !== null;
      if (isExists) {
        localStorage.removeItem(key);
        return true;
      }
      return false;
    } catch (error) {
      console.error(
        `Error removing item with key "${key}" from localStorage:`,
        error
      );
      return false;
    }
  }
  
  hasKey(key: string): boolean {
    try {
      return localStorage.getItem(key) !== null;
    } catch (error) {
      console.error(`Error checking existence of key "${key}" in localStorage:`, error);
      return false;
    }
  }
}
