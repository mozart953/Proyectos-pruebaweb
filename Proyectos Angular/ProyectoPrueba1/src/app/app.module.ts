import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaComponent } from './Componentes/vista/vista.component';
import { Vista1Component } from './Componentes/vista1/vista1.component';
import { VentanaUnoComponent } from './Componentes/modales/ventana-uno/ventana-uno.component';
import { VentanaComponent } from './Componentes/ventana/ventana.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    Vista1Component,
    VentanaUnoComponent,
    VentanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
