import { Component } from '@angular/core';
import { AppServices } from '../../../../app.services';
import { projects } from '../../projects/projects';

@Component({
  selector: 'app-card-bottom',
  standalone: true,
  imports: [],
  templateUrl: './card-bottom.component.html',
  styleUrl: './card-bottom.component.scss'
})
export class CardBottomComponent {
    public projects = projects;
  
  constructor(public services: AppServices) {  }

  nextProject(): void {
    this.services.index = (this.services.index + 1) % this.projects.length;
  }
}
