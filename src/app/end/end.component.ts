import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { LegalNoticeComponent } from '../pages/legal-notice/legal-notice.component';
import { CommonModule } from '@angular/common';
import { AppServices } from '../app.services';
import { CreatorComponent } from '../pages/creator/creator.component';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule, LegalNoticeComponent, CreatorComponent],
  templateUrl: './end.component.html',
  styleUrl: './end.component.scss'
})
export class EndComponent {
  constructor(public services: AppServices, private router: Router) {}

  showLegalNotice = false;

  openMail(): void {
    window.location.href = 'mailto:martin@reifschneider.me?subject=Portfolio%20Anfrage&body=Hallo%20Martin,%0Aich%20habe%20Interesse%20an%20...';
  }

  closeCard() {
      this.services.showLegalNoticeCard = false;
      this.services.showImprintCard = false;
  }

  openCard(str: string) {
    if(str == 'legalNotice') {
      this.services.showLegalNoticeCard = true;
      this.services.policyChecked = true;
    }
    else
      this.services.showImprintCard = true;
  }
}
