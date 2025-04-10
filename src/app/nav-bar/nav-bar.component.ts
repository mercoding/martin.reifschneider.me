import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, FormsModule, LanguageToggleComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  selectedLang: 'en' | 'de' = 'en';

  onLangChange(lang: 'en' | 'de') {
    this.selectedLang = lang;
    console.log('Sprache geändert zu:', lang);
    // Optional: i18nService.setLanguage(lang)
  }

}
