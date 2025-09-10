import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppServices } from '../../app.services';
import { LanguageToggleComponent } from '../../language-toggle/language-toggle.component';

@Component({
  selector: 'app-desktop-nav',
  standalone: true,
  imports: [CommonModule, LanguageToggleComponent],
  templateUrl: './desktop-nav.component.html',
  styleUrl: './desktop-nav.component.scss'
})
export class DesktopNavComponent {
constructor(public services: AppServices) {}
  selectedLang: 'en' | 'de' = 'en';

  onLangChange(lang: 'en' | 'de') {
    this.selectedLang = lang;
    console.log('Sprache geändert zu:', lang);
    // Optional: i18nService.setLanguage(lang)
  }

  reloadPage(): void {
    window.location.reload();
  }
}
