import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentedosComponent } from './componentedos/componentedos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import {DataService} from './data.service';
import { AboutComponent } from './about/about.component';

const Routes: Route[] = [
  {path: '', component : ComponentedosComponent },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentedosComponent,
    UsuariosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
