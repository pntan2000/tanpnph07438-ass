import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
import { ProductManagerEditComponent } from './product-manager-edit/product-manager-edit.component';
import { BannerBottomComponent } from './banner-bottom/banner-bottom.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, ProductComponent, SlideComponent, CategoryComponent, ProductManagerComponent, ProductDetailComponent, AddProductComponent, HomeComponent, AboutComponent, NotFoundComponent, LoginComponent, OrderManagerComponent, ProductManagerEditComponent,  BannerBottomComponent, NewProductComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
