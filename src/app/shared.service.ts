import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  
  constructor(private http: HttpClient) {}
  
  

  getData(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }

  postData(body:any): Observable<any> {

    return this.http.post('http://localhost:3000/test1',body)

  }
 

}
