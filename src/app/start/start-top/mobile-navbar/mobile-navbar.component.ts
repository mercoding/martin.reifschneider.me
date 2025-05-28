import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { AppServices } from '../../../app.services';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownMenuComponent],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss'
})
export class MobileNavbarComponent {
  constructor(public services: AppServices) {}
  menuActive = false;
  isChecked = true;


  openMenu() {
    this.services.menuActive = !this.services.menuActive;

    console.log('checked');
    
  }

  reloadPage(): void {
    window.location.reload();
  }

  onToggle(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    console.log('Checked?', isChecked);
  }
  
  isOpen = false;

toggleMenu() {
  this.isOpen = !this.isOpen;
}
}
