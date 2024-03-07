import { Component } from '@angular/core';
import { HighlighterDirective } from '../directives/highlighter.directive';
import { UpperCaseDirective } from '../directives/upper-case.directive';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HighlighterDirective,UpperCaseDirective],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  name="Rakesh"
  age=25
  salary=1200000
  status="single"
  isBtndisable=false
  PhoneNumber=4654652332
  users=[{name:"Rakesh",age:25,salary:1200,status:"Single"},
  {name:"Rajan",age:22,salary:1100,status:"Married"},
  {name:"Chottu",age:26,salary:1600,status:"Married"},
  ]
  data = [{name:'john',weight:"80kg"}, {name:'alice',weight:"70kg"}, {name:'bob',weight:"56kg"}, {name:'Emma',weight:"80kg"}];
}
