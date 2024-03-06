import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute, input, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
function formatName(value:string) {
 return "hi" +" "+ value
}
@Component({
  selector: 'app-learningdecor',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './learningdecor.component.html',
  styleUrl: './learningdecor.component.css'
})
export class LearningdecorComponent {
@Input({alias:"username",transform:formatName}) name=""
@Input({transform:booleanAttribute}) isSingle!:boolean
@Input({transform:numberAttribute}) Salary!:number
}
