// legal-notice.component.ts - VERBESSERTES SCROLL-TO-TOP
import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AppServices } from '../../app.services';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    CommonModule, 
    DataProtectionComponent, 
    DatenschutzComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit, AfterViewInit {
  constructor(
    public services: AppServices,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // ✅ SOFORTIGES SCROLL-TO-TOP
    this.scrollToTop();
  }

  ngAfterViewInit() {
    // ✅ ZUSÄTZLICHES SCROLL-TO-TOP NACH VIEW INIT
    setTimeout(() => {
      this.scrollToTop();
    }, 0);
  }

  private scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      // ✅ MEHRFACH-ANSATZ für zuverlässiges Scrollen
      
      // Sofort
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Mit kurzer Verzögerung
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 50);
      
      // Mit längerer Verzögerung für Sicherheit
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }, 100);
      
      //console.log('✅ Scrolled to top');
    }
  }
}