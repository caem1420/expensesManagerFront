import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'expenses',
    loadComponent: () => import('./expenses/expenses.page').then( m => m.ExpensesPage)
  },
  {
    path: 'habits',
    loadComponent: () => import('./habits/habits.page').then( m => m.HabitsPage)
  },
];
