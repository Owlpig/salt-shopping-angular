import { Injectable } from '@angular/core';
import p from '../products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts() {
    return p.products
  }
  getProduct(id: string) {
    return p.products.find(p => p.id === id)
  }
  constructor() { }
}
