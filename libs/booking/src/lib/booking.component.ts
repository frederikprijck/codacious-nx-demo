import { Component } from '@angular/core';
import { BookingService } from '@codacious-nx-demo/data-access';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent {

  constructor(private bookingService: BookingService) {

  }

  book(value) {
    this.bookingService.book(value).subscribe();
  }
}
