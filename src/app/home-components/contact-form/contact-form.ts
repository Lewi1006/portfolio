import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  contactForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
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
      this.contactForm.value;
    }
  }
}
