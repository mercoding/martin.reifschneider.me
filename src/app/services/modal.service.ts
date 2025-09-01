import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  showLegalNoticeCard = false;
  showImprintCard = false;
  policyChecked = false;
  showCreatorCard = false;

  constructor(
    private storage: StorageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loadModalStates();
  }

  // Legal Notice Card
  setLegalNoticeCard(show: boolean) {
    this.showLegalNoticeCard = show;
    this.saveModalState('showLegalNoticeCard', show);
  }

  // Imprint Card
  setImprintCard(show: boolean) {
    this.showImprintCard = show;
    this.saveModalState('showImprintCard', show);
  }

  // Creator Card
  setCreatorCard(show: boolean) {
    this.showCreatorCard = show;
    this.saveModalState('showCreatorCard', show);
  }

  // Policy Checked
  setPolicyChecked(checked: boolean) {
    this.policyChecked = checked;
    this.saveModalState('policyChecked', checked);
  }

  // Alle Cards schließen
  closeAllCards() {
    this.setLegalNoticeCard(false);
    this.setImprintCard(false);
    this.setCreatorCard(false);
    this.setPolicyChecked(false);
  }

  // Spezifische Close-Methoden
  closeLegalNoticeCard() {
    this.setLegalNoticeCard(false);
    this.setPolicyChecked(false);
  }

  closeCreatorCard() {
    this.setCreatorCard(false);
  }

  private saveModalState(key: string, value: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      this.storage.setItem(key, value.toString());
      //console.log(`💾 ${key} saved:`, value);
    }
  }

  private loadModalStates() {
    if (isPlatformBrowser(this.platformId)) {
      this.showLegalNoticeCard = this.storage.getItem('showLegalNoticeCard') === 'true';
      this.showImprintCard = this.storage.getItem('showImprintCard') === 'true';
      this.showCreatorCard = this.storage.getItem('showCreatorCard') === 'true';
      this.policyChecked = this.storage.getItem('policyChecked') === 'true';

      /*
      console.log('📖 Loaded modal states:', {
        legalNotice: this.showLegalNoticeCard,
        imprint: this.showImprintCard,
        creator: this.showCreatorCard,
        policy: this.policyChecked
      });*/
    }
  }
}