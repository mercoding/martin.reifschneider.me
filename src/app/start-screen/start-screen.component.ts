import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

}
