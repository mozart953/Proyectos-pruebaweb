import { Component } from '@angular/core';
import {Link} from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links:Link[];

  constructor(){
    this.links = [
      new Link('Angular','http://angular.io',100),
      new Link('Google','http://Google.com',30),
      new Link('wikipedia','http://wikipedia.com',40),
    ];
    console.log(this.links)

  }

  addLink(title:HTMLInputElement, link:HTMLInputElement){
    console.log('Valores: ', title.value, link.value);
    this.links.push(new Link (title.value,link.value));
    title.value='';
    link.value='';
    return false;
  }

}
