import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { GallaryComponent } from './gallary/gallary.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RestoComponent } from './resto/resto.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {path: 'menu',component:MenuComponent},
  {path: 'gallary',component:GallaryComponent},
  {path: 'order',component:OrderComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'resto',component:RestoComponent},
  {path: 'insert',component:InsertComponent},
  {path: 'update',component:UpdateComponent},
  {path: 'delete',component:DeleteComponent},
  {path: 'view',component:ViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
