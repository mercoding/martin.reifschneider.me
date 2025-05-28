import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { AppServices } from '../../app.services';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver, public preview: AppServices, @Inject(PLATFORM_ID) private platformId: Object) {
    this.breakpointObserver
      .observe(['(max-width: 1450px)'])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.clearPreviewOnScroll, true);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.clearPreviewOnScroll, true);
    }
  }


  clearPreviewOnScroll = () => {
    this.preview.clearPreview();
  };
}
