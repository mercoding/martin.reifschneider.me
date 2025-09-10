// creator.component.ts - FOOTER IMPORT HINZUFÜGEN
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AppServices } from '../../app.services';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component'; // ✅ IMPORT HINZUFÜGEN
import { ImprintComponent } from './imprint/imprint.component';
import { ImpressumComponent } from './impressum/impressum.component';

@Component({
  selector: 'app-creator',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent, // ✅ HIER HINZUFÜGEN
    ImprintComponent,
    ImpressumComponent
  ],
  templateUrl: './creator.component.html',
  styleUrl: './creator.component.scss'
})
export class CreatorComponent implements OnInit {
  constructor(
    public services: AppServices,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  closeCard() {
    this.services.setCreatorCard(false);
  }

  openCreator() {
    this.services.setCreatorCard(true);
  }
}