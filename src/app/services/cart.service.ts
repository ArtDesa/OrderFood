//This is a Service
//Services require importing Injectable and are defined by having a @Injectable decorator.
//They make use of Dependency Injection (DI).

import { Injectable } from '@angular/core';

/* Services are meant to encapsulate and share logic or data that 
   doesn’t belong to any single component.
   They're ideal for managing global states (e.g., authentication), 
   fetching data (e.g., API calls), or utilities (e.g., date formatting).
   Services are a way to remove things a component or multiple components might rely on, 
   and instead provide them from an external source (the Service) that any component can use.
   It helps simplify the code in components to the essentials without 
   the "clutter" that services can hold for them.

   Components on the other hand are primarily intended to control and display UI elements.
*/
/* Dependency injection (DI) is a design pattern where objects (dependencies) are 
provided to a class rather than being created directly by the class. 
(provided in the form of a Service that many components can use)
By marking a class with the @Injectable decorator, you tell Angular that 
this class can be injected as a dependency into other components, services, or directives.
*/

//@Injectable decorator is used to make a class available for dependency injection within Angular.
@Injectable({
  providedIn: 'root'
})
export class CartService {
/* The CartService provides the getCart(), sendToCart(), and total() methods 
   for the cart component to use. */

  //cart[] array to store the dish {} objects
  private cart = []
  // {dish, servings}, {dish, servings}, {dish, servings}

  constructor() { }

  //Returns the cart[] array of the instantiated CartService object.
  getCart(){
    return this.cart;
  }

  //Takes a dish object argument and appends it to the end of the cart
  sendToCart(dish){

    //Is the cart empty?
    if(this.cart.length == 0){
      this.cart.push(dish); 
    }else{
      
      let newDish = true;
      
      //Search through this.cart
      for(let i=0;i<this.cart.length;i++){

        //Does dish already exist in cart?
        if(dish.dish.id == this.cart[i].dish.id){
          
          this.cart[i].servings += dish.servings;
          
          newDish = false;
          break;
          
        }
      }
      //If dish is new push it to cart, otherwise skip
      if(newDish){
        this.cart.push(dish);
      }
    }
  }

  //Adds and returns the total price of all dishes in the cart
  total(){
    let sum = 0;
    
    for(let i=0;i<this.cart.length;i++){
      sum += this.cart[i].dish.price * this.cart[i].servings;
    }
    return sum;
  }
}
