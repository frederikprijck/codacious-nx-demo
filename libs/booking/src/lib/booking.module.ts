import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';
import { UiModule } from '@codacious-nx-demo/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingFormComponent } from './booking-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BookingComponent }]),
    ReactiveFormsModule,
    UiModule,
  ],
  declarations: [BookingComponent, BookingFormComponent]
})
export class BookingModule {}
