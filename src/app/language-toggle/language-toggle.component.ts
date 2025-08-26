import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { AppServices } from '../app.services';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss']
})
export class LanguageToggleComponent {
  @Input() value: 'en' | 'de' = 'en';
  @Output() langChange = new EventEmitter<'en' | 'de'>();

  constructor(public services: AppServices) {}

  toggleLang() {
    this.services.languageService.isGerman = !this.services.isGerman;
    const lang = this.services.isGerman ? 'de' : 'en';
    this.services.languageService.language = lang;
    this.services.setLanguage(lang);
  }

}
