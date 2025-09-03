// legal-notice.component.ts - ANPASSEN
import { Component } from '@angular/core';
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
export class LegalNoticeComponent {
  constructor(public services: AppServices) {}

  ngOnInit() {
    // ✅ Scroll to top beim Laden der Seite
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Alternative ohne Animation:
    // window.scrollTo(0, 0);
  }
}