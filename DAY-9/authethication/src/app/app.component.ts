import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
// myFirstformcontrol:FormControl=new FormControl("rakesh")
// firstname:FormControl=new FormControl("rakesh")
// lastname:FormControl=new FormControl("rakesh")
// email:FormControl=new FormControl("rakesh")
// password:FormControl=new FormControl("rakesh")

userProfileform=new FormGroup({
  firstName:new FormControl("",Validators.required),
  lastName:new FormControl(""),
  email:new FormControl("",Validators.required),
  password:new FormControl("",Validators.required),
  address:new FormGroup({
  houseNo:new FormControl("0"),
  city:new FormControl(""),
  pinCode:new FormControl(""),
  State:new FormControl("")
  })
})

Submit(){
  //we can get value as we want
  console.log("Form Data",this.userProfileform.controls['firstName'].value);
  
}

//patch the data that we have saved into API into form once it opened
updateData(){
  this.userProfileform.patchValue({
    firstName:"pyal",
    lastName:"kumar",
    email:"rk35654@gmail.com",
    password:"hjfgkg",
    address:{
    houseNo:"54",
    city:"ayodhya",
    pinCode:"84321",
    State:"4434"
  }
})

}
}