import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: '', component: StartComponent },
    { path: 'about', component: AboutComponent }
];
