import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { UserRoutes } from './_routes/user.routes';

import { SharedModule } from './../shared';
import { SocketService, UtilsService } from './../shared/_services';

import { UserComponent } from './user.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserFormComponent } from './user-form/user-form.component';

import { UserService } from './../shared/_services/';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    SocketService,
    UtilsService,
    Title,
  ],
  declarations: [
    UserComponent,
    UserUpdateComponent,
    UserFormComponent,
  ]
})
export class UserModule { }
