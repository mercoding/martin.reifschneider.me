import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AppServices } from '../../app.services';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, MatCardModule, ImprintComponent, DataProtectionComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public services: AppServices) {}

  closeCard() {
    this.services.showLegalNoticeCard = false;    
  }
}
