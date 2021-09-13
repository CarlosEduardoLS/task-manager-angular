import { TaskService } from './shared/task.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list';

@NgModule({
  declarations: [ListTaskComponent],
  imports: [CommonModule],
  providers: [TaskService],
})
export class TasksModule {}
