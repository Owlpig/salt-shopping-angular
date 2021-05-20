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
  private cookieValue: string = ''

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

  ngOnInit() {
    this.cookieValue = this.cookieService.get('cart')
    this.cart = JSON.parse(this.cookieValue)
    const id = this.route.snapshot.paramMap.get('id')
    const prod = id !== null ? this.service.getProduct(id) : undefined
    if (prod !== undefined) { this.product = prod } 
  }

}
