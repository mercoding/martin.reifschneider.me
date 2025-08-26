import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImpressumComponent } from './impressum/impressum.component';
import { ImprintComponent } from './imprint/imprint.component';
import { AppServices } from '../../app.services';


@Component({
  selector: 'app-creator',
  standalone: true,
  imports: [CommonModule, MatCardModule, ImprintComponent, ImpressumComponent],
  templateUrl: './creator.component.html',
  styleUrl: './creator.component.scss'
})
export class CreatorComponent {
  constructor(public services: AppServices) { }

  closeCard() {
    this.services.setCreatorCard(false);
  }

  openCreator() {
    this.services.setCreatorCard(true);
  }
}
