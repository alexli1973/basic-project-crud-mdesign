import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth/auth.component';

export  const routes: Routes = [
  {path: '', redirectTo: 'auth/signin', pathMatch: 'full'},
  {path: 'system', component: HomePageComponent},
  {path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {}
