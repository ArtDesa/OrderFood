import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  //Add @Input() for dish so we can bind onto it in the home.component.html file. 
  //Check the home.component.html file for selector app-dish.
  @Input() dish;

  servings = 0;
  color = '#BA17CA';
  color2 = '#0F812E';

  //When instantiated, takes a CartService object
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  /*Collects the dish and servings information and sends it in an object (info)
    to the CartService's sendToCart() method*/
  addToCart(){
    let info={
      dish: this.dish,
      servings: this.servings
    }

    this.cartService.sendToCart(info);
  }

}
