import { Component, OnInit } from '@angular/core';
import { User } from "./User";
import { ProductService } from "./product.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  user: User = new User();
  users: User[];
  constructor(
    private productService:ProductService
    ) { }
  ngOnInit() {
    this.login();
    console.log(this.users);
  }
  
  login(){
   this.productService.getUser().subscribe(response => this.users = response, error => console.log(error));
  }
}
