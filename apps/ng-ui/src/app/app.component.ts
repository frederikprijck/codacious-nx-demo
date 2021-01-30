import { Component } from '@angular/core';
import { CustomerService } from "@codacious-nx-demo/data-access";

@Component({
  selector: 'codacious-nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-ui';

  customer = this.customerService.getCurrent();
  constructor(private customerService: CustomerService) {

  }
}
