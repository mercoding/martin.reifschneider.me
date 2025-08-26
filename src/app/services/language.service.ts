import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  isGerman = false;
  language: 'en' | 'de' = 'en';

  constructor(private storage: StorageService) {
    this.loadLanguageFromStorage();
  }

  setLanguage(language: 'en' | 'de') {
    this.language = language;
    this.isGerman = language === 'de';
    this.storage.setItem('preferredLanguage', language);
  }

  private loadLanguageFromStorage() {
    const savedLanguage = this.storage.getItem('preferredLanguage') as 'en' | 'de';
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      this.language = savedLanguage;
      this.isGerman = savedLanguage === 'de';
    }
  }
}