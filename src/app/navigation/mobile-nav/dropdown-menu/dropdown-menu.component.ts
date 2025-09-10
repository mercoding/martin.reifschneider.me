import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LanguageToggleComponent } from '../../../language-toggle/language-toggle.component';
import { AppServices } from '../../../app.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [LanguageToggleComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss'
})
export class DropdownMenuComponent {
  constructor(public services: AppServices, private router: Router, // ✅ Router injizieren
    @Inject(PLATFORM_ID) private platformId: Object) { }

  selectedLang: 'en' | 'de' = 'en';
  menuOpened = false;

  onLangChange(lang: 'en' | 'de') {
    this.selectedLang = lang;
    //console.log('Sprache geändert zu:', lang);
    // Optional: i18nService.setLanguage(lang)
  }

  reloadPage(): void {
    window.location.reload();
  }

  dropdownMenu() {
    this.services.menuActive = !this.services.menuActive;
    document.body.style.overflow = this.services.menuActive ? 'hidden' : 'auto';
  }

  // ✅ NAVIGATION METHODEN HINZUFÜGEN
  navigateToSection(section: string) {
    // Schließe das Menü
    this.dropdownMenu();

    // Navigiere zur Hauptseite falls nicht bereits dort
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        // Warte kurz bis Navigation abgeschlossen ist
        setTimeout(() => {
          this.services.scrollTo(section);
        }, 100);
      });
    } else {
      // Bereits auf Hauptseite - direkt scrollen
      this.services.scrollTo(section);
    }
  }

  navigateToPage(route: string) {
    // Schließe das Menü
    this.dropdownMenu();

    // Navigiere zur Seite
    this.router.navigate([route]);
  }


  
}
