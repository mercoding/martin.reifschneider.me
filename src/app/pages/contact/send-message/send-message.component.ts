import { Component } from '@angular/core';
import { AppServices } from '../../../app.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-send-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {
  emailSentSuccess = false;
  showSuccessMessage = false;

  constructor(public services: AppServices) { }

  public showSuccessAnimation(): void {
    this.emailSentSuccess = true;
    this.showSuccessMessage = true;

    // ✅ NACH 3 SEKUNDEN AUSBLENDEN
    setTimeout(() => {
      this.showSuccessMessage = false;
      // ✅ NACH FADE-OUT KOMPLETT ENTFERNEN
      setTimeout(() => {
        this.emailSentSuccess = false;
      }, 500); // Animation duration
    }, 3000);
  }

  // ✅ ERROR MESSAGE (optional)
  showErrorState = false;
  private showErrorMessage(): void {
    this.showErrorState = true;
    setTimeout(() => {
      this.showErrorState = false;
    }, 5000);
  }
}
