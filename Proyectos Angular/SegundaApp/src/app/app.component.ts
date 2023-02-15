import { Component, OnInit } from '@angular/core';
import {Usuario, userType} from './otros/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SegundaApp';

  user:Usuario=<Usuario>{
    ID:23,
    Nombre: 'prueba uno',
    Apellidos: 'prueba xd',
    Nick:'xd',
    Email: 'prueba@gmail.com',
    contrasena: '123',
    Tipo: userType.Administrador
  }

  mostrar (): void{
    console.log(this.user.Apellidos);
  }
}
