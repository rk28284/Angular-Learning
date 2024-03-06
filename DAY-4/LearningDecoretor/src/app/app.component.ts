import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearningdecorComponent } from './learningdecor/learningdecor.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LearningdecorComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="Learning Decortors"
  users=[{
    username:"Ram", isSingle:true, Salary:7800},
  {username:"Ganesh", isSingle:false, Salary:120080},
 {username:"Krishna", isSingle:true, Salary:124500}]
}
