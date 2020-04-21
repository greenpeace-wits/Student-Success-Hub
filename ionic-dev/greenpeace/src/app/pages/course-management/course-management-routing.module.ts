import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseManagementPage } from './course-management.page';

const routes: Routes = [
  {
    path: '',
    component: CourseManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseManagementPageRoutingModule {}
