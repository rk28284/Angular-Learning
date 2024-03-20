import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NotfoundpageComponent } from './component/notfoundpage/notfoundpage.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    {path:"",component:LoginComponent,pathMatch: 'full'},
    {path:"home",component:HomeComponent},
    {path:"signup",component:SignupComponent},
    { path: "**",component:NotfoundpageComponent },
];
