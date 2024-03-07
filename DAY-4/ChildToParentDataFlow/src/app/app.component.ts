import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChildToParentDataFlow';
  users=[{
    username:"Ram", isSingle:true, Salary:7800},
  {username:"Ganesh", isSingle:false, Salary:120080},
 {username:"Krishna", isSingle:true, Salary:124500}]


 receiveData(e:User){
  console.log(e);
 const userindex= this.users.findIndex(user=>user.username==e.name)
this.users[userindex].Salary=e.newSalary
}
}
