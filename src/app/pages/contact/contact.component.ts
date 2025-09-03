// contact.component.ts - KORRIGIERT
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // HttpHeaders hinzufügen
import { HttpClientModule } from '@angular/common/http';
import { AppServices } from '../../app.services';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private http: HttpClient, public services: AppServices, private router: Router) {}

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

  onSubmit(ngForm: NgForm) {
    // ✅ KORRIGIERTE Validierung - prüfe auch Policy
    if (ngForm.submitted && ngForm.form.valid && this.services.policyChecked) {
      
      console.log('Sending data:', this.contactData); // Debug
      
      if (!this.mailTest) {
        // ✅ KORRIGIERTER HTTP-Request
        this.http.post('https://martin.reifschneider.me/sendMail.php', 
                      this.contactData, 
                      this.httpOptions)
          .subscribe({
            next: (response) => {
              //console.log('Email sent successfully:', response);
              this.resetForm(ngForm);
            },
            error: (error) => {
              console.error('Error sending email:', error);
              console.log('Error details:', {
                status: error.status,
                statusText: error.statusText,
                message: error.message,
                url: error.url
              });
            },
            complete: () => console.info('Email send attempt complete'),
          });
      } else {
        // Test Mode
        console.log("TEST MODE - Email would be sent:", this.contactData);
        this.resetForm(ngForm);
      }
    } else {
      console.log('Form validation failed:', {
        submitted: ngForm.submitted,
        valid: ngForm.form.valid,
        policyChecked: this.services.policyChecked,
        errors: ngForm.form.errors
      });
    }
  }

  private resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.contactData = { name: "", email: "", message: "" };
    this.services.setPolicyChecked(false);
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
}