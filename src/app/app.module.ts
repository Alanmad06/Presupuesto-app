import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlujoComponent } from './flujo/flujo.component';
import { FormComponent } from './form/form.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { flujoService } from './flujo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlujoComponent,
    FormComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [flujoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
