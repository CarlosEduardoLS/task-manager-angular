import { UpdateTaskComponent } from './update/update-task.component';
import { RegisterTaskComponent } from './register/register-task.component';
import { ListTaskComponent } from './list/list-task.component';
import { Routes } from '@angular/router';

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list',
  },
  {
    path: 'tasks/list',
    component: ListTaskComponent,
  },
  {
    path: 'tasks/register',
    component: RegisterTaskComponent,
  },
  {
    path: 'tasks/update/:id',
    component: UpdateTaskComponent,
  },
];
