// creator.component.ts - FÜR SINGLE PAGE ANGEPASST
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ImpressumComponent } from './impressum/impressum.component';
import { ImprintComponent } from './imprint/imprint.component';
import { AppServices } from '../../app.services';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-creator',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    ImprintComponent, 
    ImpressumComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './creator.component.html',
  styleUrl: './creator.component.scss'
})
export class CreatorComponent implements OnInit {
  constructor(
    public services: AppServices,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    // ✅ SSR-sicheres Scroll to top
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