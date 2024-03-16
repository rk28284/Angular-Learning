import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent  implements OnInit{

  
  task:any=[]
constructor(private taskService:TaskService){}
ngOnInit(): void {
  this.task=this.taskService.getTask()
}
}
