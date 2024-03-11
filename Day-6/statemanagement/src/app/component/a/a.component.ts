import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
constructor(public counterSevice:CounterService){}


getCount(){
 return this.counterSevice.getCounter()
}

incCount(){
  return this.counterSevice.InCrementCounter()
}
}
