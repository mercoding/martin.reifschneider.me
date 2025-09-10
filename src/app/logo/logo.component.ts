import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AppServices } from '../app.services';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  constructor(public services: AppServices, @Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  reloadPage(): void {
    if (this.router.url === '/') {
      window.location.reload();
    } else {
      this.navigateToPage('');
    }
  }

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
