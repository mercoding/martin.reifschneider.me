import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AppServices } from '../../app.services';
import { TooltipComponent } from './tooltip/tooltip.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, TooltipComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(public services: AppServices) {}
  
  scrollTo(id: string): void {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
