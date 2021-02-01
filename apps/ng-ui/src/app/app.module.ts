import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
