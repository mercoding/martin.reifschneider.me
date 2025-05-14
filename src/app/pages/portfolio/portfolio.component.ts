import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewService } from './previewServices';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    constructor(public preview: PreviewService, @Inject(PLATFORM_ID) private platformId: Object) {} 
    
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
