import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
import { ProductsService } from '../products.service';
import { Product } from '../product'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  cart: Array<Product> = []
  product: Product = {id:'', item:'', price:'', description:''}
  preProd: any
  cookieValue?: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService,
    private cartService: CartService
    // private cookieService: CookieService
  ) { }
  addToCart(prod: Product) {
    this.cartService.updateCart(prod).subscribe(item => console.log(item))
    // this.cart.push(prod)
    // this.cookieService.set('cart', JSON.stringify(this.cart));
    // window.location.reload();
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
    // this.cookieValue = this.cookieService.get('cart')
    // this.cart = this.cookieValue ? JSON.parse(this.cookieValue) : []
    const id = this.route.snapshot.paramMap.get('id')
    if (id) this.getProduct(id)
  }

}
