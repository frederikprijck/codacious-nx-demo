import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  book(data) {
    return of(data).pipe(tap(console.log));
  }
}
