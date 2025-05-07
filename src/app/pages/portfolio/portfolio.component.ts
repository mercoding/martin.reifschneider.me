import { Component } from '@angular/core';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';
import { CommonModule } from '@angular/common';
import { PreviewService } from './previewServices';
import { JoinComponent } from './join/join.component';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, JoinComponent, ElPolloLocoComponent],
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
