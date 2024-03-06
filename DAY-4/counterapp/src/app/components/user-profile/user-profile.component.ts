import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


//decorater
@Component({
  selector: 'app-user-profile',
  standalone: true,
  // common module used when we use directive
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
//compomnet whole ko kahte hai
export class UserProfileComponent {
name="Rakesh"
age=25
salary=120000
status="single"
isBtndisable=false
inputVal="test"

users=[{name:"Rakesh",age:25,salary:1200,status:"single"},
{name:"Payal",age:22,salary:1100,status:"single"},
{name:"Shyam",age:26,salary:1600,status:"married"},
]
onChange(e:Event){
let value=(e.target as HTMLInputElement).value
  console.log(value);

  // we are acessing fnction so we have to use this
  this.inputVal=value
}
}
