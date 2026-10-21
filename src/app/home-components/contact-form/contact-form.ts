import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  alertService = inject(AlertService);

  constructor(private http: HttpClient) {}

  contactForm = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð .'-]+\s+[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð .'-]+$/i,
        ),
      ],
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ),
      ],
    }),
    message: new FormControl('', { validators: [Validators.required] }),
    privacy: new FormControl(false, { validators: [Validators.requiredTrue] }),
  });

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get privacy() {
    return this.contactForm.get('privacy');
  }

  formSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.http.post('/portfolio/php/contact-form-mail.php', formData).subscribe({
        next: (response) => {
          this.contactForm.reset({
            name: '',
            email: '',
            message: '',
            privacy: false,
          });

          this.alertService.success('Your message has been sent successfully!', 3000);
        },
        error: (error) => {
          console.error('Mail sending failed:', error);
        },
      });
    }
  }
}
