import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @Input() nameUser="";

  constructor() { }

  ngOnInit(): void {
  }

}
