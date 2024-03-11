import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
private count=0
  constructor() { }

  getCounter(){
    return this.count;
  }
  InCrementCounter(){
    return this.count=this.count+1
  }
}
