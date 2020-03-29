import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  items:Product[];
  page = 1;
  pageSize = 10;
  constructor(
     private productService:ProductService
  ) { }

  ngOnInit():void {
    this.getProducts();
  }
  selected:Product;
showdetail(product){
this.selected= product;
}

getProducts(){
    this.productService.getProducts().subscribe(response => this.items = response, error => console.log(error));
}

removeItem(id){
  this.products = this.productService.removeProduct(id);
}


}