import { Component } from '@angular/core';
import { StartNavbarComponent } from './start-navbar/start-navbar.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



@Component({
  selector: 'app-start-top',
  standalone: true,
  imports: [CommonModule, StartNavbarComponent, MobileNavbarComponent],
  templateUrl: './start-top.component.html',
  styleUrl: './start-top.component.scss'
})
export class StartTopComponent {
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(max-width: 1230px)'])
      .subscribe(result => {
        this.isMobile = result.matches;
      });

  }
}
