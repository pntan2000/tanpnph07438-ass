import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 products:Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit():void {
    this.getProducts();
  }
getProducts(){
    this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
}

}