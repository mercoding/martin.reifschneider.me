import { Component } from '@angular/core';
import { AppServices } from '../../../../app.services';
import { projects } from '../../projects/projects';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardDescriptionComponent } from './card-description/card-description.component';
import { CardProjectImgComponent } from './card-project-img/card-project-img.component';
import { CardTypesComponent } from './card-types/card-types.component';
import { CardButtonsComponent } from './card-buttons/card-buttons.component';


@Component({
  selector: 'app-card-center',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, CardTitleComponent, CardDescriptionComponent, CardProjectImgComponent, CardTypesComponent, CardButtonsComponent],
  templateUrl: './card-center.component.html',
  styleUrl: './card-center.component.scss'
})
export class CardCenterComponent {
  public projects = projects;

  constructor(public services: AppServices) {  }
  closeCard(): void {
    this.services.showProjectPreviewCard = false;    
  }
  nextProject(): void {
    this.services.index = (this.services.index + 1) % projects.length;    
  }
  openProject(): void {
    window.open(this.projects[this.services.index].liveTest, '_blank');
  }
  openRepository(): void {
     window.open(this.projects[this.services.index].gitHub, '_blank');
  }
}
