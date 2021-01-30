import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  getCurrent() {
    return {
      name: 'John Doe',
    };
  }
}
