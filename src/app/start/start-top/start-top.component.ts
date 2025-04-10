import { Component } from '@angular/core';
import { StartNavbarComponent } from './start-navbar/start-navbar.component';


@Component({
  selector: 'app-start-top',
  standalone: true,
  imports: [StartNavbarComponent],
  templateUrl: './start-top.component.html',
  styleUrl: './start-top.component.scss'
})
export class StartTopComponent {

}
