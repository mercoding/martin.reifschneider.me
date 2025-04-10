import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

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

  isGerman = false;

  toggleLang() {
    this.isGerman = !this.isGerman;
    const lang = this.isGerman ? 'de' : 'en';
    console.log('Sprache gewechselt zu:', lang);
  }

}
