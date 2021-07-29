import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwCoreModule } from 'ngw-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
