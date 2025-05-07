import { Component } from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';
import { PreviewService } from '../previewServices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-el-pollo-loco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './el-pollo-loco.component.html',
  styleUrl: './el-pollo-loco.component.scss'
})
export class ElPolloLocoComponent {
  constructor(public preview: PreviewService) {}

}
