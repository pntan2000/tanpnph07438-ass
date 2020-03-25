import { Injectable } from '@angular/core';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  products = data;
  api = 'https://5e7b1a7f0e04630016332aa8.mockapi.io';
  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}/Product`);
  }
  getProductDetail(id){
    return this.products.find(product => product.id == id)
  }
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id);
  }

  addProduct(product){
    this.products.push(product);
  }
}