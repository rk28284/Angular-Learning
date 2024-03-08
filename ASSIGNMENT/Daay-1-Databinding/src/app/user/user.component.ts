import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  pageTitle="Angular Data Binding Practice"
  a=10
  b=20
  url="https://pbs.twimg.com/media/F6irlJLaAAAqnaM?format=jpg&name=900x900"
isDisable=false
togglebtn(){
  this.isDisable=!this.isDisable
}
handleButtonClick(){
  console.log("Button Clicked");
  
}

inputVal="User Name will Apper here"
onChange(e:Event){
  let value=(e.target as HTMLInputElement).value
  console.log(value);
  this.inputVal=value
}
}
