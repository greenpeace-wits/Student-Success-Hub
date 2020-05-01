import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseManagementPageRoutingModule } from './course-management-routing.module';

import { CourseManagementPage } from './course-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseManagementPageRoutingModule
  ],
  declarations: [CourseManagementPage]
})
export class CourseManagementPageModule {}
