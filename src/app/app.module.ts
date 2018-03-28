import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {AppRoutingModule, routes} from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {AuthModule} from './auth/auth.module';
import { HeaderComponent } from './shared/components/header/header.component';
import {MaterialModule} from './shared/modules/material/material.module';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginService} from './shared/services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './shared/services/auth.service';
import { ItemsComponent } from './home-page/items/items.component';
import {ConnectService} from './shared/services/connect.service';
import {SharingService} from './shared/services/sharing.service';
import {HomePageRoutingModule} from './home-page/home-page-routing.module';
import {HomePageModule} from './home-page/home-page.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
   // ItemsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HomePageModule
  ],
  providers: [LoginService, AuthService, ConnectService, SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
