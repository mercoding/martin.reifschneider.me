import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class PreviewService {
    showPreview = false;
    loadImage = '';
    previewTop = 0;


    setImage(img: string) {
        this.loadImage = img;
        this.showPreview = true;
    }

    clear() {
        this.showPreview = false;
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
      
}
