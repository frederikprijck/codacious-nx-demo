import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'booking-form',
  templateUrl: './booking-form.component.html'
})
export class BookingFormComponent {
  form;

  @Output()
  book = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      address2: '',
      country: '',
      state: '',
      zip: '',
      payment: this.fb.group({
        name: '',
        number: '',
        expiration: '',
        cvv: ''
      })
    })
  }
}
