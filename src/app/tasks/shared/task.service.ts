import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  create(task: Task): void {
    const tasks = this.getTasks();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  findById(id: number): Task {
    const tasks: Task[] = this.getTasks();
    const task = tasks.find((task) => task.id === id);
    return task;
  }

  update(task: Task): void {
    const tasks: Task[] = this.getTasks();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  delete(id: number): void {
    let tasks: Task[] = this.getTasks();
    tasks = tasks.filter((task) => task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  changeStatus(id: number): void {
    const tasks: Task[] = this.getTasks();
    tasks.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].completed = !obj.completed;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }
}
