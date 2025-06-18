import { Component } from '@angular/core';
import { AppServices } from '../../app.services';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public services: AppServices) {}
}
