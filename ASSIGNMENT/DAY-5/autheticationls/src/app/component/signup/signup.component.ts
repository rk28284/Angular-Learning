import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {

  return control.value.password === control.value.confirmPassword
    ? null
    : { PasswordNoMatch: true };
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', Validators.required)
  }
  ,
  { validators: [confirmPasswordValidator] }
  );

  constructor(private AuthService:AuthService) {
    console.log("Signup page value are here",this.signupForm.value)

   }


  onSignup() {
     this.AuthService.SignUpUser(this.signupForm.value)
  }
}
