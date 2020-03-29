import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MailComponent } from './mail/mail.component';
import { PageComponent } from './page/page.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'product/list', component: ProductListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'mailus', component: MailComponent},
  { path: 'home', component: HomeComponent},
  { path: 'page', component: PageComponent},
  { path: 'admin/product', component: AdminComponent},
  { path: 'admin/order', component: OrderComponent},
  { path: 'manager/product', component: ProductManagerComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo:'/404', pathMatch:'full'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }