import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardService {
  showProjectPreviewCard = false;
  index = 0;

  constructor(
    private storage: StorageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loadProjectCardState();
  }

  setProjectCard(show: boolean, projectIndex: number = 0) {
    this.showProjectPreviewCard = show;
    this.index = projectIndex;
    this.saveProjectCardState(show, projectIndex);
  }

  closeProjectCard() {
    this.setProjectCard(false, 0);
  }

  private saveProjectCardState(show: boolean, projectIndex: number) {
    if (isPlatformBrowser(this.platformId)) {
      this.storage.setItem('showProjectPreviewCard', show.toString());
      if (show) {
        this.storage.setItem('projectIndex', projectIndex.toString());
      } else {
        this.storage.removeItem('projectIndex');
      }
      console.log('💾 Project card state saved:', { show, projectIndex });
    }
  }

  private loadProjectCardState() {
    if (isPlatformBrowser(this.platformId)) {
      const showCard = this.storage.getItem('showProjectPreviewCard');
      const projectIndex = this.storage.getItem('projectIndex');

      if (showCard === 'true' && projectIndex !== null) {
        this.showProjectPreviewCard = true;
        this.index = parseInt(projectIndex, 10) || 0;
        console.log('📖 Loaded project card state:', { 
          show: this.showProjectPreviewCard, 
          index: this.index 
        });
      } else {
        this.showProjectPreviewCard = false;
        this.index = 0;
      }
    }
  }
}