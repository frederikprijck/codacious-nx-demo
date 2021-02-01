import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { log } from '@codacious-nx-demo/utils';

@Component({
  selector: 'checking',
  templateUrl: './checkin.component.html',
  styles: [
    `
      form {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
      input {
        font-size: 36px;

      }
    `
  ]
})
export class CheckinComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      bookingNumber: ''
    });
  }

  submit(data) {
    log(data);
  }
}
