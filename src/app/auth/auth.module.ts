import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthComponent } from './auth.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
   // CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignInComponent,
    AuthComponent
  ]
})
export class AuthModule { }
