import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasklist:any=[]
  constructor() { 
    this.tasklist=localStorage.getItem('tasklist')||[]
 
  }

getTask(){
  this.tasklist=localStorage.getItem('tasklist')
}
addTask(task:Task){
  console.log("Add task here",task);
  
  let newTasklist=this.tasklist.push(task)
  // localStorage.setItem('tasklist',JSON.stringify(this.tasklist))

  localStorage.setItem('tasklist',newTasklist)
}
}
export  interface Task{
  title:string,
  completed:boolean
}
