// contact.component.ts - KORRIGIERT
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // HttpHeaders hinzufügen
import { HttpClientModule } from '@angular/common/http';
import { AppServices } from '../../app.services';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SendMessageComponent } from './send-message/send-message.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, HttpClientModule, SendMessageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild(SendMessageComponent) sendMessage!: SendMessageComponent;
  constructor(private http: HttpClient, public services: AppServices, private router: Router) { }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = false; // ✅ Setze auf true zum Testen

  // ✅ KORRIGIERTE HTTP-Konfiguration
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  validateMessage(): boolean {
    const trimmedData = {
      name: this.contactData.name.trim(),
      email: this.contactData.email.trim(),
      message: this.contactData.message.trim()
    };

    // ✅ PRÜFE OB FELDER NACH TRIM LEER SIND
    const isNameValid = trimmedData.name.length > 0;
    const isEmailValid = trimmedData.email.length > 0;
    const isMessageValid = trimmedData.message.length > 0;

    return isNameValid && isEmailValid && isMessageValid;
  }

  onSubmit(ngForm: NgForm) {
    if (!this.validateMessage()) { this.resetForm(ngForm); return; }
    if (ngForm.submitted && ngForm.form.valid && this.services.policyChecked) {

      if (!this.mailTest) {
        // ✅ KORRIGIERTER HTTP-Request
        this.http.post('https://martin.reifschneider.me/sendMail.php',
          this.contactData,
          this.httpOptions)
          .subscribe({
            next: (response) => {
              this.sendMessage.showSuccessAnimation();
              this.resetForm(ngForm);
            },
            error: (error) => {
              console.error('Error sending email:', error);
            },
            complete: () => console.info('Email send attempt complete'),
          });
      } else {
        // Test Mode
        console.log("TEST MODE - Email would be sent:", this.contactData);
        this.resetForm(ngForm);
        this.sendMessage.showSuccessAnimation();
      }
    } 
  }

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setPolicyChecked(target.checked);
  }

  togglePolicy() {
    this.services.setPolicyChecked(!this.services.policyChecked);
  }

  setPolicyChecked(checked: boolean) {
    this.services.setPolicyChecked(checked);
  }

  openCard() {
    const route = this.services.isGerman ? '/datenschutz' : '/privacy-policy';
    this.router.navigate([route]);
    this.services.setLegalNoticeCard(true);
    this.services.setPolicyChecked(true);
  }



  private resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.contactData = { name: "", email: "", message: "" };
    this.services.setPolicyChecked(false);
    // ✅ RESET SUCCESS STATE
    this.sendMessage.emailSentSuccess = false;
    this.sendMessage.showSuccessMessage = false;
  }
}