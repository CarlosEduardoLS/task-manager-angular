import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list';
import { FormsModule } from '@angular/forms';
import { RegisterTaskComponent } from './register';
import { UpdateTaskComponent } from './update';
import { TaskService, TaskCompletedDirective } from './shared';

@NgModule({
  declarations: [
    ListTaskComponent,
    RegisterTaskComponent,
    UpdateTaskComponent,
    TaskCompletedDirective,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TaskService],
})
export class TasksModule {}
