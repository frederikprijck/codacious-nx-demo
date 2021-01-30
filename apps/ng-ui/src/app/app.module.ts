import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '@codacious-nx-demo/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'booking',
        loadChildren: () =>
          import('@codacious-nx-demo/booking').then((m) => m.BookingModule),
      },
      {
        path: 'check-in',
        loadChildren: () =>
          import('@codacious-nx-demo/checkin').then((m) => m.CheckinModule),
      },
      {
        path: '',
        redirectTo: '/booking',
        pathMatch: 'full'
      }
    ]),
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
