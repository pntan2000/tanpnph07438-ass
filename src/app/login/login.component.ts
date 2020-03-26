import { Component, OnInit } from '@angular/core';
import { User } from "../User";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  users: User[];
  constructor(
    private productService:ProductService
    ) { }
  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }
  
  getUsers(){
   this.productService.getUser().subscribe(response => console.log(response), error => console.log(error));
  }
  login(){
    this.productService.login(this.user);
  }
}