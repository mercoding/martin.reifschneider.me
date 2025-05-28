import { Component } from '@angular/core';
import { LanguageToggleComponent } from '../../../../language-toggle/language-toggle.component';
import { AppServices } from '../../../../app.services';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [LanguageToggleComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss'
})
export class DropdownMenuComponent {
  constructor(public services: AppServices) {
    document.body.style.overflow = 'hidden';
  }

  selectedLang: 'en' | 'de' = 'en';
  menuOpened = false;

  onLangChange(lang: 'en' | 'de') {
    this.selectedLang = lang;
    console.log('Sprache geändert zu:', lang);
    // Optional: i18nService.setLanguage(lang)
  }

  reloadPage(): void {
    window.location.reload();
  }

  dropdownMenu() {
    this.services.menuActive = !this.services.menuActive;
    document.body.style.overflow = 'auto';
  }
}
