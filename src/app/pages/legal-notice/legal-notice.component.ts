import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AppServices } from '../../app.services';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public services: AppServices) {}

  closeCard() {
    this.services.showLegalNoticeCard = false;    
  }
}
