import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddTaskComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-list';
}
