import { TaskService, Task } from '../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.getTasks();
  }

  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  delete($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + task.name + '"?')) {
      this.taskService.delete(task.id);
      this.tasks = this.taskService.getTasks();
    }
  }
}
