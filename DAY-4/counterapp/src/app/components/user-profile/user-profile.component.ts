import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


//decorater
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
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

onChange(e:Event){
let value=(e.target as HTMLInputElement).value
  console.log(value);

  // we are acessing fnction so we have to use this
  this.inputVal=value
}
}
