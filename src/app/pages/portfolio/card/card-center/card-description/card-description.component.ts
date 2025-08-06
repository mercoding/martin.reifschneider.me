import { Component } from '@angular/core';
import { projects } from '../../../projects/projects';
import { AppServices } from '../../../../../app.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-description.component.html',
  styleUrl: './card-description.component.scss'
})
export class CardDescriptionComponent {
  public projects = projects;

  constructor(public services: AppServices) { }
}
