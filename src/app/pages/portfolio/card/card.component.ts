import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CardServices } from './card.services';
import { projects } from '../projects/projects';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CardComponent {
  public projects = projects;

  constructor(public services: CardServices) {  }

  closeCard() {
    this.services.showCard = false;
    console.log('close');
    
  }

  nextProject() {
    this.services.index = (this.services.index + 1) % projects.length;    
  }
}
