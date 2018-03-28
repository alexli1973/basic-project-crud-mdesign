import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemsComponent} from './items/items.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import { EditItemComponent } from './items/edit-item/edit-item.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../shared/modules/material/material.module';
import {HomePageRoutingModule} from './home-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HomePageRoutingModule
  ],
  declarations: [
    ItemsComponent,
    AddItemComponent,
    EditItemComponent,
    ItemDetailComponent,
  ]
})
export class HomePageModule { }
