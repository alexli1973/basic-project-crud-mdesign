import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthComponent} from './auth.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent,
  children: [
    {path: 'signin', component: SignInComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
