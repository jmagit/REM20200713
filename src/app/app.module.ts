import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeEs, 'es', localeEsExtra); import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainModule, AjaxWaitInterceptor } from './main';
import { CommonAppModule } from './common-app';
import { CommonServicesModule } from './common-services';
import { GfiCoreModule, LoggerService, ERROR_LEVEL } from '../gfi-core';
import { PersonasModule } from './personas';
import { BlogModule } from './blog';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { DemosComponent } from './demos/demos.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LibrosComponent } from './libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    ProductoFormComponent,
    CalculadoraComponent,
    LibrosComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, GfiCoreModule, MainModule, CommonAppModule, CommonServicesModule,
    PersonasModule, BlogModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
