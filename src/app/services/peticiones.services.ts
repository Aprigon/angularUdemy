import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService {

    public url: string;

  constructor(private http: HttpClient) { 
    this.url="http://jsonplaceholder.typicode.com/posts";
  }
  getArticulos(){
      return this.http.get(this.url);
  }
}