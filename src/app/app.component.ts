import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AppServices } from './app.services';
import { OrientationWarningComponent } from './orientation-warning/orientation-warning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OrientationWarningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'martin.reifschneider.me';
  private scrollTimeout: any;

  constructor(
    public services: AppServices,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Kurz warten, bis alle Komponenten geladen sind
      setTimeout(() => {
        this.detectCurrentSection();
      }, 1000);
    }
  }

  // Standard Scroll Event
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.detectCurrentSection();
    }
  }

  // Scroll Ende - für bessere Performance
  @HostListener('window:scrollend', ['$event'])
  onScrollEnd(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      //console.log('🏁 Scroll ended');
      this.detectCurrentSection();
    }
  }

  // Touch Ende - für Mobile
  @HostListener('window:touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (isPlatformBrowser(this.platformId)) {
      // Kurzer Timeout für Touch-Scroll-Ende
      setTimeout(() => {
        this.detectCurrentSection();
      }, 100);
    }
  }

  // Wheel Event - für Maus-Scroll
  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (isPlatformBrowser(this.platformId)) {
      // Debouncing für Wheel Events
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      
      this.scrollTimeout = setTimeout(() => {
        this.detectCurrentSection();
      }, 150);
    }
  }

  private detectCurrentSection() {
    const sections = ['start', 'about-me', 'skills', 'portfolio', 'contact', 'end'];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Element ist sichtbar wenn es den mittleren Bereich des Viewports überlappt
        if (rect.top < viewportHeight * 0.6 && rect.bottom > viewportHeight * 0.4) {

          // Nur bei Änderung die SERVICE-METHODE aufrufen
          if (this.services.currentSection !== section) {
            //console.log(`🔄 Section changed: ${this.services.currentSection} → ${section}`);

            // VERWENDE DIE SERVICE-METHODE mit 'scroll' Flag
            this.services.setCurrentSection(section, 'scroll');
          }
          break;
        }
      }
    }
  }
}