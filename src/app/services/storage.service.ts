import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setItem(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.warn(`Could not save ${key}:`, error);
      }
    }
  }

  getItem(key: string): string | null {
    if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.warn(`Could not load ${key}:`, error);
        return null;
      }
    }
    return null;
  }

  removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.warn(`Could not remove ${key}:`, error);
      }
    }
  }
}