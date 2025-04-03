import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

export const routes: Routes = [
    { path: '', component: StartScreenComponent },
    { path: 'nav-bar', component: NavBarComponent}
];
