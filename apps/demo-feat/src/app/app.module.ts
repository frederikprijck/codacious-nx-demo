import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoLibModule } from '@codacious-nx-demo/demo-lib'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,DemoLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
