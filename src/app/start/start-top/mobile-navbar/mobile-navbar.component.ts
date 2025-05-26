import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss'
})
export class MobileNavbarComponent {
  menuActive = false;
  isChecked = true;


  openMenu() {
    this.menuActive = !this.menuActive;

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
