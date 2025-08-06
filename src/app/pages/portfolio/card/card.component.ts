import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
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
