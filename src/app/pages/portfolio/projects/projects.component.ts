import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { projects } from './projects';
import { AppServices } from '../../../app.services';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(public services: AppServices) {}
    public projects = projects;

    openCard(i: number) {
      this.services.setProjectCard(true, i);
      document.body.style.overflow = 'hidden';
    }
    
    closeCard() {
      this.services.closeProjectCard();
      document.body.style.overflow = 'auto';
    }
}
