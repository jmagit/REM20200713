import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main';
import { CommonAppModule } from './common-app';
import { GfiCoreModule } from '../gfi-core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, GfiCoreModule, MainModule, CommonAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
