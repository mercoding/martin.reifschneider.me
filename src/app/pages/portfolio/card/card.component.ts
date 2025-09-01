import { Component, ChangeDetectionStrategy, EventEmitter, Output, HostListener } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { projects } from '../projects/projects';
import { MatButtonModule } from '@angular/material/button';
import { AppServices } from '../../../app.services';
import { CardTopComponent } from './card-top/card-top.component';
import { CardCenterComponent } from './card-center/card-center.component';
import { CardBottomComponent } from './card-bottom/card-bottom.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, CardTopComponent, CardCenterComponent, CardBottomComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CardComponent {
  public projects = projects;

  constructor(public services: AppServices) { }

  // Klick auf Overlay (außerhalb der Karte)
  onOverlayClick(event: Event): void {
    this.closeCard();
  }

  // Verhindere das Schließen beim Klick auf die Karte selbst
  onCardClick(event: Event): void {
    event.stopPropagation();
  }

  // Optional: ESC-Taste zum Schließen
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    this.closeCard();
  }

  closeCard(): void {
    this.services.projectCard.showProjectPreviewCard = false;
  }

  nextProject(): void {
    this.services.projectCard.index = (this.services.index + 1) % projects.length;
  }

  openProject(): void {
    window.open(this.projects[this.services.index].liveTest, '_blank');
  }

  openRepository(): void {
    window.open(this.projects[this.services.index].gitHub, '_blank');
  }
}
