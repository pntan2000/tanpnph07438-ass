import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductManagerEditComponent } from './product-manager-edit/product-manager-edit.component';
import { BannerBottomComponent } from './banner-bottom/banner-bottom.component';
import { NewProductComponent } from './new-product/new-product.component';
import { MailComponent } from './mail/mail.component';
import { PageComponent } from './page/page.component';
import { AdminComponent } from './admin/admin.component';
import { MarketComponent } from './market/market.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, ProductComponent, CategoryComponent, ProductManagerComponent, HomeComponent, AboutComponent, NotFoundComponent, ProductManagerEditComponent,  BannerBottomComponent, NewProductComponent, MailComponent, PageComponent, AdminComponent, MarketComponent, AddProductComponent, OrderComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
