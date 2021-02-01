import { Component } from '@angular/core';

@Component({
  selector: 'ui-footer',
  template: ` <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">© 2021 Codacious</p>
    <ul class="list-inline">
      <li class="list-inline-item">
        <a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>`,
})
export class FooterComponent {}
