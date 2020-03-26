import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../Product";

@Component({
  selector: 'app-product-manager-edit',
  templateUrl: './product-manager-edit.component.html',
  styleUrls: ['./product-manager-edit.component.css']
})
export class ProductManagerEditComponent implements OnInit {

  constructor() { }
  @Input('data')product:Product;
  ngOnInit() {
  }

}