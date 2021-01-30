import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-header',
  template: `
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"
    >
      <h5 class="my-0 mr-md-auto font-weight-normal">NX Demo</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" [routerLink]="['/booking']">Booking</a>
        <a class="p-2 text-dark" [routerLink]="['/check-in']">Check-in</a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Contact</a>
    </div>
  `,
  styles: [
    `
      :host {
      }
    `,
  ],
})
export class HeaderComponent {
  @Input()
  username: string;
}
