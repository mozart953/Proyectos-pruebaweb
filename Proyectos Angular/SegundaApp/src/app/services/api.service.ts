import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../others/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  api_Url: string ="http://"; 

  /*login (): Observable<LoginResponse>{
    
  }*/
}
