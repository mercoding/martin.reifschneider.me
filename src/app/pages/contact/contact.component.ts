import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http'; // Import hinzufügen
import { HttpClientModule } from '@angular/common/http';
import { log } from 'console';
import { AppServices } from '../../app.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private http: HttpClient, public services: AppServices) {} // Hier injizieren

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = false;
  //policyChecked = false;

  post = {
    endPoint: 'https://martin.reifschneider.me/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log("send");
      
      ngForm.resetForm();
    }
  }

  openCard() {
    this.services.modal.showLegalNoticeCard = true;
    this.services.modal.policyChecked = true;
  }
}
