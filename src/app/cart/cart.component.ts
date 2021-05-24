import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<any> = []
  private cookieValue: string = ''
  total: number = 0

  checkOut() {
    this.cookieService.delete('cart')
    window.location.reload();
  }

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('cart')
    this.cart = this.cookieValue ? JSON.parse(this.cookieValue) : []
    this.cart.forEach(i => {this.total += parseFloat(i.price); console.log(this.total)})
  }

}
