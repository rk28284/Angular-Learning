import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {
carrer="Loading..."

constructor (private carrerSevice:JokeService){

}
ngOnInit(){
  this.getAnotherCarrer()
}
getAnotherCarrer(){
  this.carrerSevice.getRandomCareer().subscribe((data:any)=>{
    this.carrer=data.value
  })
}

}
