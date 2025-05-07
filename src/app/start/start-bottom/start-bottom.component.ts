import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MarqueeComponent } from '../../marquee/marquee.component';

@Component({
  selector: 'app-start-bottom',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MarqueeComponent],
  templateUrl: './start-bottom.component.html',
  styleUrl: './start-bottom.component.scss'
})
export class StartBottomComponent {
  scrollTo(id: string): void {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  openGitHub(): void {
    window.open('https://github.com/mercoding', '_blank');
  }
  
  openLinkedin(): void {
    window.open('https://linkedin.com/in/martin-reifschneider', '_blank');
  }
}
