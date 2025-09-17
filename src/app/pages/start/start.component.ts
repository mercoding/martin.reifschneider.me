import { Component } from '@angular/core';
import { StartTopComponent } from './start-top/start-top.component';
import { StartCenterComponent } from './start-center/start-center.component';
import { StartBottomComponent } from './start-bottom/start-bottom.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [StartTopComponent, 
    StartCenterComponent, 
    StartBottomComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

}
