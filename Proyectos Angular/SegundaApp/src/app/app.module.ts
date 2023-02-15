import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { Parte4Component } from './components/parte4/parte4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    Parte4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
