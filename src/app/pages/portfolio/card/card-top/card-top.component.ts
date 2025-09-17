import { Component } from '@angular/core';
import { AppServices } from '../../../../app.services';

@Component({
  selector: 'app-card-top',
  standalone: true,
  imports: [],
  templateUrl: './card-top.component.html',
  styleUrl: './card-top.component.scss'
})
export class CardTopComponent {
  constructor(public services: AppServices) { }

  closeCard(): void {
    this.services.projectCard.showProjectPreviewCard = false;
    this.services.closeProjectCard();
    document.body.style.overflow = 'auto';
  }
}
