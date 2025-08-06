import { Component } from '@angular/core';
import { AppServices } from '../../../../../app.services';
import { projects } from '../../../projects/projects';

@Component({
  selector: 'app-card-project-img',
  standalone: true,
  imports: [],
  templateUrl: './card-project-img.component.html',
  styleUrl: './card-project-img.component.scss'
})
export class CardProjectImgComponent {
  public projects = projects;

  constructor(public services: AppServices) {  }
}
