import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { AppServices } from '../app.services';


@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent implements AfterViewInit {
  @ViewChild('track', { static: false }) trackRef!: ElementRef;

  items = [
    'Frontend Developer',
    'Open to work',
    'Based in Frankfurt',
    'Available for remote work'
  ];

  itemsDe = [
    'Frontend Entwickler',
    'Offen für Arbeit',
    'Sitz in Frankfurt',
    'Verfügbar für Remote-Arbeit'
  ];

  repeatCount = 2;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private services: AppServices) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const trackEl = this.trackRef.nativeElement as HTMLElement;
        const contentEl = trackEl.querySelector('.marquee-content') as HTMLElement;
        const totalWidth = window.innerWidth;
        const contentWidth = contentEl.scrollWidth;
        this.repeatCount = Math.ceil((totalWidth * 7) / contentWidth);
      }, 0);
    }
  }

  get itemsWithDots() {
    if (this.services.language == "en")
      return this.items.flatMap((item) => [
        { text: '•', isDot: true },
        { text: item, isDot: false }
      ]);
    else {
      return this.itemsDe.flatMap((item) => [
        { text: '•', isDot: true },
        { text: item, isDot: false }
      ]);
    }
  }
}
