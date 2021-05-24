import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../cart.service'
import { Product } from '../product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<Product> = []
  preCart: any
  // private cookieValue: string = ''
  total: number = 0

  getCart() {
    this
      .cartService
      .getCart()
      .subscribe((data) => {
        this.preCart = data
        this.cart = this.preCart
        this.cart.forEach(i => {this.total += parseFloat(i.price); console.log(this.total)})
      }) 
  }

  checkOut() {
    // this.cookieService.delete('cart')
    this.cartService.checkOut().subscribe();
    window.location.reload();
  }

  constructor(private cartService: CartService /*private cookieService: CookieService*/) { }

  ngOnInit(): void {
    // this.cookieValue = this.cookieService.get('cart')
    // this.cart = this.cookieValue ? JSON.parse(this.cookieValue) : []
    this.getCart();
  }

}
