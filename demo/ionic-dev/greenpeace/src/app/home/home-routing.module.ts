import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver,
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then(
          m => m.DashboardPageModule
        )
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'course-management',
        loadChildren: () => import('../pages/course-management/course-management.module').then(
          m => m.CourseManagementPageModule
        )
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then(
          m => m.SettingsPageModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
