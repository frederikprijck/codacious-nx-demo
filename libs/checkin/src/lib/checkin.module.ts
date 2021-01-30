import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckinComponent } from './checkin.component';
import { UiModule } from '@codacious-nx-demo/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CheckinComponent }]),
    UiModule,
  ],
  declarations: [CheckinComponent]
})
export class CheckinModule {}
