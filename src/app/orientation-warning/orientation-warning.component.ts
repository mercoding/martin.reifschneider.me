// orientation-warning.component.ts
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orientation-warning',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="orientation-warning" *ngIf="showWarning">
      <div class="rotate-icon">📱</div>
      <h2>{{ isGerman ? 'Hochformat verwenden' : 'Please rotate your device' }}</h2>
      <p>{{ isGerman ? 
        'Diese App ist für die Hochformat-Ansicht optimiert. Bitte drehen Sie Ihr Gerät.' : 
        'This app is optimized for portrait mode. Please rotate your device to portrait orientation.' 
      }}</p>
    </div>
  `,
  styleUrls: ['./orientation-warning.component.scss']
})
export class OrientationWarningComponent implements OnInit, OnDestroy {
  showWarning = false;
  isGerman = false; // Verbinde mit deinem Language Service

  ngOnInit() {
    this.checkOrientation();
  }

  ngOnDestroy(): void {
    // Cleanup logic if needed
  }

  @HostListener('window:orientationchange', ['$event'])
  @HostListener('window:resize', ['$event'])
  onOrientationChange() {
    setTimeout(() => {
      this.checkOrientation();
    }, 100);
  }

  private checkOrientation() {
    const isSmallDevice = window.innerWidth <= 926;
    const isLandscape = window.innerWidth > window.innerHeight;
    const isVeryLowHeight = window.innerHeight <= 430;
    
    this.showWarning = isSmallDevice && isLandscape && isVeryLowHeight;
  }
}