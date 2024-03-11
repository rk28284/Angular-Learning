import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlighterDirective } from '../../directives/highlighter.directive';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule,CommonModule,HighlighterDirective],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements OnInit{
  name="Rakesh"
  age=25
  salary=120000
  status="single"
  isBtndisable=false
  PhoneNumber=4654652332
  inputVal="test"
  bgColor="red"
  users=[{name:"Rakesh",age:25,salary:1200,status:"single"},
  {name:"ram",age:22,salary:1100,status:"single"},
  {name:"Shyam",age:26,salary:1600,status:"married"},
  ]
  onChange(e:Event){
  let value=(e.target as HTMLInputElement).value
    console.log(value);
  
    // we are acessing fnction so we have to use this
    this.inputVal=value
  }
  constructor(){
    //property
    //depency injection
    //event lister register
    console.log("constructor called",this.name);
    
  }
  handleClear(){
    this.users=[]
  }
  ngOnInit(){
    //property
    //depency injection
    //event lister register
    //intial api call
    console.log("ngOnint called",this.name);
  }
 ngOnDestory(){
  console.log("ngOndestory called");

 }
}
