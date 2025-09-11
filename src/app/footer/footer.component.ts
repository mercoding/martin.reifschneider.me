import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AppServices } from '../app.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
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
      this.services.setPolicyChecked(!this.services.policyChecked); // Datenschutz-Hinweis als gelesen markieren
      this.router.navigate([route]);
    } else {
      // ✅ Navigiere zur Creator/Imprint-Seite
      const route = this.services.isGerman ? '/impressum' : '/imprint';
      this.router.navigate([route]);
    }
  }

    // ✅ NAVIGATION METHODEN HINZUFÜGEN
  navigateToSection(section: string) {
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
    // Navigiere zur Seite
    this.router.navigate([route]);
  }
}
