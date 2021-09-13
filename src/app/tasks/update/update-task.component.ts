import { TaskService, Task } from '../shared';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  @ViewChild('taskForm') taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.task = this.taskService.findById(id);
  }

  update(): void {
    if (this.taskForm.form.valid) {
      this.taskService.update(this.task);
      this.router.navigate(['tasks']);
    }
  }
}
