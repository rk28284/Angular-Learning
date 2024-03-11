import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
 // method-1
  // http:HttpClient
  // constructor(http:HttpClient) { 
  //   this.http=http
  // }

  //method-2
// private http=inject(HttpClient)

//method-3
  constructor(private http:HttpClient) { 

}
  getJoke(){
   return this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
  }
}
