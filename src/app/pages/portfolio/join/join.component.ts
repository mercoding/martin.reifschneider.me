import { Component } from '@angular/core';
import { PreviewService } from '../previewServices';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
  constructor(public preview: PreviewService) {}
}
