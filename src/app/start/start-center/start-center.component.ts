import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AppServices } from '../../app.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-center',
  standalone: true,
  imports: [CommonModule ,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './start-center.component.html',
  styleUrl: './start-center.component.scss'
})
export class StartCenterComponent {
  constructor(public services: AppServices) {}
 
}
