import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'expenses',
        loadComponent: () =>
          import('../expenses/expenses.page').then((m) => m.ExpensesPage),
      },
      {
        path: 'habits',
        loadComponent: () =>
          import('../habits/habits.page').then((m) => m.HabitsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/expenses',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/expenses',
    pathMatch: 'full',
  },
];
