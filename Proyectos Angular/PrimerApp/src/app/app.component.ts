import { Component } from '@angular/core';
import {DataService} from './data.service';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //arreglo = ['Alemania', 'Usa', 'China'];
  //activo = true;
  /*name: string = "Persona1";
  age: number = 0; 
  address: {
    street:string;
    city: string;
  };

  hobbies: string[];

  constructor(){
    this.age = 20;
    this.address = {
      street:'Calle uno',
      city:'Angeles CA.'
    }

    this.hobbies = ['nadar', 'ajedrez', 'futbol'];
  }*/

  name: string="usuario 1";
  age: string ="28";

  users: string[] = ['a','b','c'];
  postear: Post[] = [];

  constructor (private dataService:DataService){
    this.dataService.getData().subscribe(data =>{
      this.postear = data;
      console.log(data);
    });
  }

  Metodo1 (){
    alert("hola");
  }

  BorrarUsuario(usuario:string){
      for(let i=0;i<this.users.length;i++){
        if(usuario==this.users[i]){
          this.users.splice(i,1);
        }
      }
  }

  AgregarUsuario(newuser:HTMLInputElement){
    this.users.push(newuser.value);
    newuser.value='';
    newuser.focus();
    console.log(newuser.value);
    return false;
  }

  

}
