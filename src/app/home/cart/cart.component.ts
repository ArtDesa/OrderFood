import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  //CartComponent class has cart and total properties
  cart; total;

  //CartComponent takes a CartService object
  constructor(private cartService: CartService) { }

  /* The cart property is assigned the value returned by the 
     CartService getCart() method */
  /* The total property is assigned the value returned by the 
     CartService total() method */
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.total();
  }

}
