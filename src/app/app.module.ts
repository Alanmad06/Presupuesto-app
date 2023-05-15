import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlujoComponent } from './flujo/flujo.component';
import { FormComponent } from './form/form.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';

@NgModule({
  declarations: [
    AppComponent,
    FlujoComponent,
    FormComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
