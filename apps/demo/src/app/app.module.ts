import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoFeatModule } from '@codacious-nx-demo/demo-feat';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DemoFeatModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
