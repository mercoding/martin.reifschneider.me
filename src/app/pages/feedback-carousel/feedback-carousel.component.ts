import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppServices } from '../../app.services';

@Component({
  selector: 'app-feedback-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './feedback-carousel.component.html',
  styleUrls: ['./feedback-carousel.component.scss'],
})
export class FeedbackCarouselComponent {
  constructor(public services: AppServices) {}

  feedbacks = [
    { message: 
      {
        en: 'Great cooperation - anytime again',
        de: 'Super Zusammenarbeit – jederzeit wieder!'
      }
      , author: 'Anna L.' },
    { message:
      { 
        en: 'Great design, fast implementation',
        de: 'Tolles Design, schnelle Umsetzung.'
      }, 
      author: 'Max M.' },
    { message: 
      {
        en: 'Very reliable, clear communication',
        de: 'Sehr zuverlässig, klare Kommunikation.'
      },
      author: 'Lea K.' },
    { message: 
      {
        en: 'Simply great',
        de: 'Einfach großartig.'
      }, 
      author: 'Tom S.' }
  ];

  currentIndex = 0;

  get prevIndex(): number {
    return (this.currentIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  get nextIndex(): number {
    return (this.currentIndex + 1) % this.feedbacks.length;
  }

  setIndex(index: number): void {
    this.currentIndex = index;
  }

  getCardPosition(i: number): 'left' | 'center' | 'right' | 'hidden' {
    if (i === this.currentIndex) return 'center';
    if (i === this.prevIndex) return 'left';
    if (i === this.nextIndex) return 'right';
    return 'hidden';
  }
  
  
}
