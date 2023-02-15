import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentedos',
  templateUrl: './componentedos.component.html',
  styleUrls: ['./componentedos.component.css']
})
export class ComponentedosComponent implements OnInit {

  titulo = 'Hola Mundo';
  subtitulo = 'Esta es mi primera app en angular xd'

  constructor() { }

  ngOnInit(): void {
  }

}
