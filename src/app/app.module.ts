import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main';
import { CommonAppModule } from './common-app';
import { CommonServicesModule } from './common-services';
import { GfiCoreModule, LoggerService, ERROR_LEVEL } from '../gfi-core';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { DemosComponent } from './demos/demos.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    ProductoFormComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, GfiCoreModule, MainModule, CommonAppModule, CommonServicesModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
