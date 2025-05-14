import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CardServices } from './card.services';
import { projects } from '../projects/projects';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
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
}
