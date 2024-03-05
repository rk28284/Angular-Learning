import { Component } from '@angular/core';


//decorater
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
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
}
