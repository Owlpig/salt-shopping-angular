import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productUrl = 'http://localhost:8080/products'
  getProducts() {
    return this.http.get(this.productUrl)
  }
  getProduct(id: string) {
    return this.http.get(this.productUrl + '/' + id)
  }
  constructor(private http: HttpClient) { }
}
