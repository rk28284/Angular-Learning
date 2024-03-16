import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApifetchService {

  constructor(private http:HttpClient) { }


  getProduct(){
    return this.http.get("https://mockapirevision.onrender.com/products")
  }
}
