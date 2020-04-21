import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';
import { IndexGuard } from '../guards/index.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    canActivate: [IndexGuard],
    children: [
      {
        path: 'signin',
        loadChildren: () => import('../pages/signin/signin.module').then(
          m => m.SignInPageModule
        )
      },
      {
        path: '',
        loadChildren: () => import('../pages/signin/signin.module').then(
          m => m.SignInPageModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
