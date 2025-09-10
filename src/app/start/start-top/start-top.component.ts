import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';



@Component({
  selector: 'app-start-top',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './start-top.component.html',
  styleUrl: './start-top.component.scss'
})
export class StartTopComponent {
  
}
