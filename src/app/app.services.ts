import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'  // <-- DAS HINZUFÜGEN
})
export class AppServices {
    showProjectPreviewCard = false;
    showLegalNoticeCard = false;
    policyChecked = false;
    showImprintCard = false;
    index = 0;
    menuActive = false;
    showPreview = false;
    loadImage = '';
    previewTop = 0;
    highlighted = false;
    isGerman = false;
    language = "en";
    currentSection = 'start';

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        // Sprache nur im Browser laden
        if (isPlatformBrowser(this.platformId)) {
            this.loadLanguageFromStorage();
            this.loadCurrentSection();
        }
    }

    setLanguage(language: 'en' | 'de') {
        this.language = language;
        this.isGerman = language === 'de';

        // Nur im Browser speichern
        if (isPlatformBrowser(this.platformId)) {
            this.saveLanguageToStorage(language);
        }
    }

    private saveLanguageToStorage(language: 'en' | 'de') {
        try {
            if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
                localStorage.setItem('preferredLanguage', language);
            }
        } catch (error) {
            console.warn('LocalStorage not available:', error);
        }
    }

    private loadLanguageFromStorage() {
        try {
            if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
                const savedLanguage = localStorage.getItem('preferredLanguage') as 'en' | 'de';
                if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
                    this.language = savedLanguage;
                    this.isGerman = savedLanguage === 'de';
                }
            }
        } catch (error) {
            console.warn('LocalStorage not available:', error);
        }
    }

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

    // Erweiterte setCurrentSection
    setCurrentSection(section: string, actionType: 'auto' | 'navigation' | 'scroll' = 'auto') {
        this.currentSection = section;

        // Nur bei expliziter Navigation oder manuellem Scroll-Ende speichern
        if (isPlatformBrowser(this.platformId) && (actionType === 'navigation' || actionType === 'scroll')) {
            this.saveCurrentSection(section);
        }
    }

    private loadCurrentSection() {
        try {
            if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
                const savedSection = localStorage.getItem('currentSection');
                if (savedSection) {
                    this.currentSection = savedSection;
                    this.scrollToInstant(savedSection);
                }
            }
        } catch (error) {
            console.warn('Could not load current section:', error);
        }
    }

    // Navigation (Button-Klicks)
    scrollTo(id: string): void {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
        this.setCurrentSection(id, 'navigation'); // Navigation-Flag
    }

    // Direktes Springen (beim Laden)
    private scrollToInstant(id: string): void {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'instant' });
        // Hier KEIN setCurrentSection, da es vom geladenen Zustand kommt
    }

    // Private Methode zum direkten Speichern
    private saveCurrentSection(section: string) {
        try {
            if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
                localStorage.setItem('currentSection', section);
                //console.log('✅ Saved to localStorage:', section); // Debug
            }
        } catch (error) {
            console.warn('Could not save current section:', error);
        }
    }


    scrollAndHighlight() {
        this.scrollTo('contact');
        this.highlighted = true;

        setTimeout(() => {
            this.highlighted = false;
        }, 1000); // 1 Sekunde später wieder zurücksetzen
    }

    openGitHub(): void {
        window.open('https://github.com/mercoding', '_blank');
    }

    openLinkedin(): void {
        window.open('https://linkedin.com/in/martin-reifschneider', '_blank');
    }
}