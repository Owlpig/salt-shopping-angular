import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import p from '../products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productUrl = '../products.json'
  getProducts() {
    return this.http.get(this.productUrl)
  }
  getProduct(id: string) {
    return p.products.find(p => p.id === id)
  }
  constructor(private http: HttpClient) { }
}
