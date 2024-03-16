import { CommonModule } from '@angular/common';
import { Component, EventEmitter,  Output,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task ,TaskService} from '../task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {

  @Output() taskAdd:EventEmitter<Task>=new EventEmitter<Task>();

  constructor(private taskService:TaskService){}


  newTasktile:string=""
  onAddTask(){
    const newTask:Task={title:this.newTasktile,completed:false}
   this.taskService.addTask(newTask)
    this.taskAdd.emit(newTask)
   console.log("New task as been creted",newTask);
   
  }
}
