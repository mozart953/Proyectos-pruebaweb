import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  postear: Post []= [];

  constructor(private dataService:DataService) {
    this.dataService.getData().subscribe(data =>{
      this.postear = data;
      console.log(data);
    });
   }

  ngOnInit(): void {
  }

}
