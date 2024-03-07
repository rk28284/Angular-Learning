import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/users';
function formatName(value:string) {
  return "hi" +" "+ value
 }
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input({alias:"username"}) name=""
  @Input({transform:booleanAttribute}) isSingle!:boolean
  @Input({transform:numberAttribute}) Salary!:number

  @Output() myEvent=new EventEmitter<User>()
  sendData(){
    this.myEvent.emit({name:this.name,newSalary:250000})
  }

}
