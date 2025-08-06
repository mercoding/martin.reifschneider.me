import { Component } from '@angular/core';
import { AppServices } from '../../../../../app.services';
import { projects } from '../../../projects/projects';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-buttons',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './card-buttons.component.html',
  styleUrl: './card-buttons.component.scss'
})
export class CardButtonsComponent {
  public projects = projects;

  constructor(public services: AppServices) {  }

  openProject(): void {
    window.open(this.projects[this.services.index].liveTest, '_blank');
  }
  openRepository(): void {
     window.open(this.projects[this.services.index].gitHub, '_blank');
  }
}
