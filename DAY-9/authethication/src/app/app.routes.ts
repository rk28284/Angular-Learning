import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NotfoundpageComponent } from './component/notfoundpage/notfoundpage.component';

export const routes: Routes = [
    {path:"",component:HomeComponent,pathMatch: 'full'},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"**",component:NotfoundpageComponent}

];
