import { Component } from '@angular/core';
import { projects } from '../../../projects/projects';
import { AppServices } from '../../../../../app.services';

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss'
})
export class CardTitleComponent {
  public projects = projects;
  constructor(public services: AppServices) {  }
}
