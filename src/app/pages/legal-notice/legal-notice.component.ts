import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AppServices } from '../../app.services';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, MatCardModule, DataProtectionComponent, DatenschutzComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public services: AppServices) {}

  closeCard() {
    this.services.setLegalNoticeCard(false);
  }

  // Datenschutz öffnen
  openDataProtection() {
    this.services.setLegalNoticeCard(true);
    this.services.setImprintCard(false); // Imprint schließen
  }

  // Impressum öffnen
  openImprint() {
    this.services.setImprintCard(true);
    this.services.setLegalNoticeCard(false); // Datenschutz schließen
  }
}
