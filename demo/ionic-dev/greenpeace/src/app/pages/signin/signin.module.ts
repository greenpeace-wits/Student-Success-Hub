import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './signin-routing.module';

import { SignInPage } from './signin.page';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
