import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  cart: Array<any> = []
  product = {id:'', item:'', price:'', description:''}
  preProd: any
  cookieValue?: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService,
    private cookieService: CookieService
  ) { }
  addToCart(prod: any) {
    this.cart.push(prod)
    this.cookieService.set('cart', JSON.stringify(this.cart));
    window.location.reload();
  }
  getProduct(id:string) {
    this
      .service
      .getProduct(id)
      .subscribe((data) => {
        this.preProd = data;
        this.product = this.preProd
      })
  }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('cart')
    console.log(this.cookieValue)
    this.cart = this.cookieValue ? JSON.parse(this.cookieValue) : []
    const id = this.route.snapshot.paramMap.get('id')
    if (id) this.getProduct(id)
  }

}
