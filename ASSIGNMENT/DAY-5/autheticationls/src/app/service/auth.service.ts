import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticatedUser: boolean = false;

  constructor(private router: Router) {}

  isAuthenticated() {
    return this.authenticatedUser;
  }

  LoginUser(item: any) {
    let user = localStorage.getItem('formUser') || null;
    if (user) {
      let newUser = JSON.parse(user);
      if (newUser.email == item.email && newUser.password == item.password) {
        this.authenticatedUser = true;
        this.router.navigate(['/home']);
      }else{
        alert('wrong email or password');
      }
    }
  }

  SignUpUser(item: any) {
    localStorage.setItem('formUser', JSON.stringify(item));
    this.router.navigate(['/home']);
  }
}
