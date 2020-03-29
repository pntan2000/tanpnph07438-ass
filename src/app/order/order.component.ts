import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

 items:Product[];
  page = 1;
  pageSize = 10;
  constructor(
     private productService:ProductService
  ) { }

  ngOnInit():void {
    this.getOrders();
  }

getOrders(){
    this.productService.getOrders().subscribe(response => this.items = response, error => console.log(error));
}
}