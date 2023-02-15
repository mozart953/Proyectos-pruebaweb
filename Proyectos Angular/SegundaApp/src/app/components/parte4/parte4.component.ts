import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parte4',
  templateUrl: './parte4.component.html',
  styleUrls: ['./parte4.component.css']
})
export class Parte4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  desactivado = false;
  tipo = 'submit';
  titulo: string = '';
  seleccion: string = '';
  seleccion2: string = '';

  log(titulo:any){
    console.log(titulo);
  }

}
