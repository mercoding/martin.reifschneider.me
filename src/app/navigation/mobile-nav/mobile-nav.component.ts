import { Component } from '@angular/core';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppServices } from '../../app.services';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownMenuComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {
  constructor(public services: AppServices) { }
  menuActive = false;
  isChecked = true;


  openMenu() {
    this.services.menuActive = !this.services.menuActive;
    document.body.style.overflow = this.services.menuActive ? 'hidden' : 'auto';
    //console.log('checked');
  }

  reloadPage(): void {
    window.location.reload();
  }

  onToggle(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    //console.log('Checked?', isChecked);
  }

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
