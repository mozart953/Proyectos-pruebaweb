import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  variable = 0;
  variable2 = [1,2,3];

  Cambiar(){
    this.variable ++;
  }

  agregar(){
    this.variable2.push(Math.random());
  }

}
