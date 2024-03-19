import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos = [
    {
      title: 'Task 1',
      description: 'Description for Task 1',
      completed: false,
    },
    { title: 'Task 2', description: 'Description for Task 2', completed: true },
    {
      title: 'Task 3',
      description: 'Description for Task 3',
      completed: false,
    },
    { title: 'Task 4', description: 'Description for Task 4', completed: true },
    {
      title: 'Task 5',
      description: 'Description for Task 5',
      completed: false,
    },
    { title: 'Task 6', description: 'Description for Task 6', completed: true },
    {
      title: 'Task 7',
      description: 'Description for Task 7',
      completed: false,
    },
    { title: 'Task 8', description: 'Description for Task 8', completed: true },
    {
      title: 'Task 9',
      description: 'Description for Task 9',
      completed: false,
    },
    {
      title: 'Task 10',
      description: 'Description for Task 10',
      completed: true,
    },
  ];
  searchQuery: string = '';
  
  get filteredTodos() {
    return this.todos.filter(todo =>
      todo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
