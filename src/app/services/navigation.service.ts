import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  currentSection = 'start';

  constructor(
    private storage: StorageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loadCurrentSection();
  }

  setCurrentSection(section: string, actionType: 'auto' | 'navigation' | 'scroll' = 'auto') {
    this.currentSection = section;

    if (actionType === 'navigation' || actionType === 'scroll') {
      this.storage.setItem('currentSection', section);
    }
  }

  private loadCurrentSection() {
    if (isPlatformBrowser(this.platformId)) {
      const savedSection = this.storage.getItem('currentSection');
      if (savedSection) {
        this.currentSection = savedSection;
        // Timeout für bessere Kompatibilität beim Laden
        setTimeout(() => {
          this.scrollToInstant(savedSection);
        }, 100);
      }
    }
  }

  scrollTo(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
      this.setCurrentSection(id, 'navigation');
    }
  }

  private scrollToInstant(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'instant' });
      }
    }
  }

  scrollAndHighlight(onHighlight: () => void, onComplete: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollTo('contact');
      onHighlight();
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }
}