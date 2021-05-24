import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productUrl = 'http://localhost:8080/cart'
  getCart() {
    return this.http.get(this.productUrl)
  }
  updateCart(productdata: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, productdata)
  }

  removeItem(id: string) {
    return this.http.delete(this.productUrl + '/' + id)
  }

  checkOut() {
    return this.http.delete(this.productUrl)
  }
  constructor(private http: HttpClient) { }
}
