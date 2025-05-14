import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './end.component.html',
  styleUrl: './end.component.scss'
})
export class EndComponent {
  scrollTo(id: string): void {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
