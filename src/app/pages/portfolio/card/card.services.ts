import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // <-- DAS HINZUFÜGEN
})
export class CardServices {
    showCard = false;
    index = 0;
}