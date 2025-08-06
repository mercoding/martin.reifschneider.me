import { Component } from '@angular/core';
import { projects } from '../../../projects/projects';
import { AppServices } from '../../../../../app.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-types.component.html',
  styleUrl: './card-types.component.scss'
})
export class CardTypesComponent {
  public projects = projects;

  constructor(public services: AppServices) {  }
}
