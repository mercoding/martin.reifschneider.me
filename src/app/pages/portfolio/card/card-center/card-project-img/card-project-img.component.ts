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

  // Methode um object-position basierend auf dem aktuellen Projekt zu bestimmen
  getImagePosition(): string {
    const currentProject = this.projects[this.services.index];
    
    // Beispiel: Verschiedene Positionen für verschiedene Projekte
    switch (currentProject?.number) {
      case '01': return 'left center';    // Zeigt linke Seite
      case '02': return 'center';   // Zeigt rechte Seite
      default: return 'center';                 // Standard zentriert
    }
  }
}
