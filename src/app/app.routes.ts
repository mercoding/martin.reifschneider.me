import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', component: StartComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent},
    { path: 'portfolio', component: PortfolioComponent}
];
