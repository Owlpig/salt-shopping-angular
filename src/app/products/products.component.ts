import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = []
  preProd: any
  
  allProducts() {
    this
      .prodservice
      .getProducts()
      .subscribe((data) => {
        this.preProd = data
        this.products = this.preProd
      })
  }
  
  constructor(private prodservice: ProductsService) { }

  ngOnInit(): void {
    this.allProducts()
  }

}
