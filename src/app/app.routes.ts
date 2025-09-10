// app.routes.ts - CREATOR ROUTEN HINZUFÜGEN
import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreatorComponent } from './pages/creator/creator.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    { path: '', component: StartComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'footer', component: FooterComponent },

    { 
        path: 'impressum', 
        component: CreatorComponent,
        title: 'Impressum - Martin Reifschneider'
    },
    { 
        path: 'imprint', 
        component: CreatorComponent,
        title: 'Imprint - Martin Reifschneider'
    },
    /*{ 
        path: 'creator', 
        component: CreatorComponent,
        title: 'Impressum | Imprint - Martin Reifschneider'
    },*/
    
    // LEGAL NOTICE ROUTEN
    { 
        path: 'legal-notice', 
        component: LegalNoticeComponent,
        title: 'Datenschutz | Privacy Policy - Martin Reifschneider'
    },
    { 
        path: 'datenschutz', 
        component: LegalNoticeComponent,
        title: 'Datenschutz - Martin Reifschneider'
    },
    { 
        path: 'privacy-policy', 
        component: LegalNoticeComponent,
        title: 'Privacy Policy - Martin Reifschneider'
    },
    
    // Fallback
    { path: '**', redirectTo: '/' }
];