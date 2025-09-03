// end.component.ts - SSR-SICHER
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
export class EndComponent implements OnInit {
  constructor(
    public services: AppServices, 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // ✅ Platform ID injection
  ) { }

  showLegalNotice = false;

  ngOnInit() {
    // ✅ Nur im Browser ausführen
    if (isPlatformBrowser(this.platformId)) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    // ✅ Zusätzliche window-Prüfung für Sicherheit
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Warte kurz bis die Seite vollständig geladen ist
      setTimeout(() => {
        window.scrollTo({ 
          top: document.body.scrollHeight, 
          behavior: 'instant' 
        });
      }, 0);
    }
  }

  openMail(): void {
    // ✅ Auch hier Browser-Check
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      window.location.href = 'mailto:martin@reifschneider.me?subject=Portfolio%20Anfrage&body=Hallo%20Martin,%0Aich%20habe%20Interesse%20an%20...';
    }
  }

  closeCard() {
    this.services.closeAllCards();
  }

  openCard(str: string) {
    if (str == 'legalNotice') {
      // Navigiere zur Datenschutz-Seite
      const route = this.services.isGerman ? '/datenschutz' : '/privacy-policy';
      this.router.navigate([route]);
    } else {
      // ✅ Navigiere zur Creator/Imprint-Seite
      const route = this.services.isGerman ? '/impressum' : '/imprint';
      this.router.navigate([route]);
    }
  }
}