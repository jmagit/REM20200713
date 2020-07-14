import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main';
import { CommonAppModule } from './common-app';
import { GfiCoreModule, LoggerService, ERROR_LEVEL } from '../gfi-core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, GfiCoreModule, MainModule, CommonAppModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: 0 },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
