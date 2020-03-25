import { Component, OnInit } from '@angular/core';
import { Product } from "../Product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product = new Product();
  constructor(
    private productService:ProductService
    ) { }

  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product);
  }
  loadImage(val) {
        var img = val.parentElement.children[0].children[0];
        var ina = val.parentElement.children[2];
        var file = val.files[0];
        var reader = new FileReader();

        reader.addEventListener("load", function () {
            img.src = reader.result;
            ina.value = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
}