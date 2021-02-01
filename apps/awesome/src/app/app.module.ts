import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AwesomeFeatLibModule} from '@codacious-nx-demo/awesome-feat-lib';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AwesomeFeatLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
