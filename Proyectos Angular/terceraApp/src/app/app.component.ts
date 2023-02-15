import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 // @Input('data') user: any;
  constructor (
    private _http:HttpClient
  ){

  }
  usuarios = [];

  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/users').
    subscribe((datos: any) => this.usuarios = datos);
  }



}
