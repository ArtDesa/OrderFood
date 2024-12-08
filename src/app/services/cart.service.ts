import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = []
  // {dish, servings}, {dish, servings}, {dish, servings}

  constructor() { }

  getCart(){
    return this.cart;
  }

  sendToCart(dish){
    this.cart.push(dish);
  }

  total(){
    let sum;
    for(let i=0;i<this.cart.length;i++){
      this.cart[i].dish.price += sum
    }
    return sum;
  }
}
