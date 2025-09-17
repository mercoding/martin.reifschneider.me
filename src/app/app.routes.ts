// app.routes.ts - CREATOR ROUTEN HINZUFÜGEN
import { Routes } from '@angular/router';
import { CreatorComponent } from './pages/creator/creator.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

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