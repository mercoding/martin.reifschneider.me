import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feedback-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './feedback-carousel.component.html',
  styleUrls: ['./feedback-carousel.component.scss'],
})
export class FeedbackCarouselComponent {
  feedbacks = [
    { message: 'Super Zusammenarbeit – jederzeit wieder!', author: 'Anna L.' },
    { message: 'Tolles Design, schnelle Umsetzung.', author: 'Max M.' },
    { message: 'Sehr zuverlässig, klare Kommunikation.', author: 'Lea K.' },
    { message: 'Einfach großartig.', author: 'Tom S.' }
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
