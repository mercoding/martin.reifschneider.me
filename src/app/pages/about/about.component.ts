import { Component } from '@angular/core';
import { AppServices } from '../../app.services';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public services: AppServices, private breakpointObserver: BreakpointObserver) {}

  isNotMobile: boolean = false;

  ngOnInit() {
    this.breakpointObserver.observe(['(min-width: 1150px)'])
      .subscribe(result => this.isNotMobile = result.matches);

    this.breakpointObserver.observe(['(min-width: 646px)'])
      .subscribe(result => this.isNotMobile = !result.matches);
  }
}
