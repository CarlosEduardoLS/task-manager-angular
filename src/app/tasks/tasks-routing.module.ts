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
];
