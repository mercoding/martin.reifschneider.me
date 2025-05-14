import { Component } from '@angular/core';
import { PreviewService } from '../previewServices';
import { CardComponent } from '../card/card.component';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { CardServices } from '../card/card.services';
import { projects } from './projects';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(public services: CardServices, public preview: PreviewService) {}
    public projects = projects;

    openCard(i: number) {
      this.services.showCard = true;
      this.services.index = i;
    }
    
    closeCard() {
      this.services.showCard = false;
    }
}
