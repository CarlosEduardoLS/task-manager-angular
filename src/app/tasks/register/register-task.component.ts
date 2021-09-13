import { TaskService } from './../shared/task.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css'],
})
export class RegisterTaskComponent implements OnInit {
  @ViewChild('taskForm') taskForm: NgForm;
  task: Task;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.task = new Task();
  }

  register(): void {
    if (this.taskForm.form.valid) {
      this.taskService.create(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}
