// header.component.ts - SOFORTIGE MOBILE ERKENNUNG
import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppServices } from '../app.services';
import { DesktopNavComponent } from '../navigation/desktop-nav/desktop-nav.component';
import { MobileNavComponent } from '../navigation/mobile-nav/mobile-nav.component';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DesktopNavComponent, MobileNavComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuActive = false;
  isChecked = true;
  isMobile = false;
  isOpen = false;
  private scrollPosition = 0;

  constructor(
    public services: AppServices,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  ngOnInit() {
    // ✅ Sofortige Erkennung beim Component-Init
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 1450;
    //console.log('Screen size changed - isMobile:', this.isMobile); // ✅ DEBUG
  }
}