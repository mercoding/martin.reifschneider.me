import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'  // <-- DAS HINZUFÜGEN
})
export class AppServices {
    showProjectPreviewCard = false;
    showLegalNoticeCard = false;
    index = 0;

    showPreview = false;
    loadImage = '';
    previewTop = 0;
    highlighted = false;



    setImage(img: string) {
        this.loadImage = img;
        this.showPreview = true;
    }

    setPreview(imagePath: string, event: MouseEvent) {
        this.loadImage = imagePath;
        this.showPreview = true;

        const element = event.target as HTMLElement;
        const rect = element.getBoundingClientRect();

        this.previewTop = rect.top + window.scrollY - 250;
    }

    clearPreview() {
        this.showPreview = false;
    }


    scrollTo(id: string): void {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
    }

    scrollAndHighlight() {
        this.scrollTo('contact');
        this.highlighted = true;
    
        setTimeout(() => {
          this.highlighted = false;
        }, 1000); // 1 Sekunde später wieder zurücksetzen
      }
}