import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import {ItemsComponent} from './items/items.component';
import {NgModule} from '@angular/core';
import {ItemDetailComponent} from './items/item-detail/item-detail.component';

const routes: Routes = [
  {path: 'system', component: HomePageComponent,
    children: [
      {path: 'items', component: ItemsComponent},
      {path: 'items/:id', component: ItemDetailComponent},
     // {path: 'orders', component: OrdersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class HomePageRoutingModule { }
