import { Injectable } from '@angular/core';
import { NavigationService } from './services/navigation.service';
import { LanguageService } from './services/language.service';
import { ProjectCardService } from './services/project-card.service';
import { ModalService } from './services/modal.service'; // Neue Import


@Injectable({
  providedIn: 'root'
})
export class AppServices {
  // UI State
  /*
  showLegalNoticeCard = false;
  policyChecked = false;
  showImprintCard = false;*/
  menuActive = false;
  showPreview = false;
  loadImage = '';
  previewTop = 0;
  highlighted = false;

  constructor(
    public navigation: NavigationService,
    public languageService: LanguageService,
    public projectCard: ProjectCardService,
    public modal: ModalService
  ) {}

  // Preview Methods
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

  // Highlight Feature
  scrollAndHighlight() {
    this.navigation.scrollAndHighlight(
      () => this.highlighted = true,
      () => this.highlighted = false
    );
  }

  // External Links
  openGitHub(): void {
    window.open('https://github.com/mercoding', '_blank');
  }

  openLinkedin(): void {
    window.open('https://linkedin.com/in/martin-reifschneider', '_blank');
  }

  // Backward Compatibility Getters
  get currentSection() { return this.navigation.currentSection; }
  get isGerman() { return this.languageService.isGerman; }
  get language() { return this.languageService.language; }
  public get showProjectPreviewCard() { return this.projectCard.showProjectPreviewCard; }
  get index() { return this.projectCard.index; }

  get showLegalNoticeCard() { return this.modal.showLegalNoticeCard; }
  get showImprintCard() { return this.modal.showImprintCard; }
  get policyChecked() { return this.modal.policyChecked; }
  get showCreatorCard() { return this.modal.showCreatorCard; }

  // Backward Compatibility Methods
  setCurrentSection(section: string, actionType: 'auto' | 'navigation' | 'scroll' = 'auto') {
    this.navigation.setCurrentSection(section, actionType);
  }

  scrollTo(id: string) {
    this.navigation.scrollTo(id);
  }

  setLanguage(language: 'en' | 'de') {
    this.languageService.setLanguage(language);
  }

  setProjectCard(show: boolean, projectIndex: number = 0) {
    this.projectCard.setProjectCard(show, projectIndex);
  }

  closeProjectCard() {
    this.projectCard.closeProjectCard();
  }

  // Neue Modal Methods
  setLegalNoticeCard(show: boolean) {
    this.modal.setLegalNoticeCard(show);
  }

  setImprintCard(show: boolean) {
    this.modal.setImprintCard(show);
  }

  setCreatorCard(show: boolean) {
    this.modal.setImprintCard(show);
  }

  setPolicyChecked(checked: boolean) {
    this.modal.setPolicyChecked(checked);
  }

  closeAllCards() {
    this.modal.closeAllCards();
  }
}