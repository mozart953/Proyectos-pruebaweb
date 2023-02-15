import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaComponent } from './Componentes/vista/vista.component';
import { Vista1Component } from './Componentes/vista1/vista1.component';

const routes: Routes = [
  {path:'vistas', component:VistaComponent},
  {path:'vista1', component:Vista1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
