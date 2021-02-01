import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckinComponent } from './checkin.component';
import { UiModule } from '@codacious-nx-demo/ui';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CheckinComponent }]),
    ReactiveFormsModule,
    UiModule,
  ],
  declarations: [CheckinComponent]
})
export class CheckinModule {}
