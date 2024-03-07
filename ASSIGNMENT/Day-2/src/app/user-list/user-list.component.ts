import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
Count:number=0

increment(){
  this.Count++
}
decrement(){
  this.Count--
}

reset(){
  this.Count=0
}




users=[{name:"Rakesh",age:25,salary:1200,status:"Single"},
  {name:"Rajan",age:22,salary:1100,status:"Married"},
  {name:"Chottu",age:26,salary:1600,status:"Married"},
  ]
}
