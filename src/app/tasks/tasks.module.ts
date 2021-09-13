import { RouterModule } from '@angular/router';
import { TaskService } from './shared/task.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list';
import { FormsModule } from '@angular/forms';
import { RegisterTaskComponent } from './register';
import { UpdateTaskComponent } from './update';

@NgModule({
  declarations: [ListTaskComponent, RegisterTaskComponent, UpdateTaskComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TaskService],
})
export class TasksModule {}
