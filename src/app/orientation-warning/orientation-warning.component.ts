// orientation-warning.component.ts
import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppServices } from '../app.services'; // Importiere deine Services

@Component({
  selector: 'app-orientation-warning',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="orientation-warning" *ngIf="showWarning">
      <div class="rotate-icon">📱</div>
      <h2>{{ services.isGerman ? 'Hochformat verwenden' : 'Please rotate your device' }}</h2>
      <p>{{ services.isGerman ? 
        'Diese App ist für die Hochformat-Ansicht optimiert. Bitte drehen Sie Ihr Gerät.' : 
        'This app is optimized for portrait mode. Please rotate your device to portrait orientation.' 
      }}</p>
    </div>
  `,
  styleUrls: ['./orientation-warning.component.scss']
})
export class OrientationWarningComponent implements OnInit, OnDestroy {
  showWarning = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public services: AppServices // Verwende deine Services für die Sprache
  ) {}

  ngOnInit() {
    // Nur im Browser ausführen
    if (isPlatformBrowser(this.platformId)) {
      this.checkOrientation();
    }
  }

  ngOnDestroy(): void {
    // Cleanup logic if needed
  }

  @HostListener('window:orientationchange', ['$event'])
  @HostListener('window:resize', ['$event'])
  onOrientationChange() {
    // Nur im Browser ausführen
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.checkOrientation();
      }, 100);
    }
  }

  private checkOrientation() {
    // Prüfe ob Browser-Umgebung
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Sichere window-Zugriffe
    if (typeof window !== 'undefined') {
      const isSmallDevice = window.innerWidth <= 926;
      const isLandscape = window.innerWidth > window.innerHeight;
      const isVeryLowHeight = window.innerHeight <= 430;
      
      this.showWarning = isSmallDevice && isLandscape && isVeryLowHeight;
    }
  }
}