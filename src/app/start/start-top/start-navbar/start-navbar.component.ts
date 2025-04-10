import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { LanguageToggleComponent } from '../../../language-toggle/language-toggle.component';

@Component({
  selector: 'app-start-navbar',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule, LanguageToggleComponent],
  templateUrl: './start-navbar.component.html',
  styleUrl: './start-navbar.component.scss'
})
export class StartNavbarComponent {
  selectedLang: 'en' | 'de' = 'en';

  onLangChange(lang: 'en' | 'de') {
    this.selectedLang = lang;
    console.log('Sprache geändert zu:', lang);
    // Optional: i18nService.setLanguage(lang)
  }
}
