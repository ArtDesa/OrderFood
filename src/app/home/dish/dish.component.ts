import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  @Input() dish;

  servings = 0;
  color = '#BA17CA';
  color2 = '#0F812E';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  addToCart(){
    let info={
      dish: this.dish,
      servings: this.servings
    }

    this.cartService.sendToCart(info);
  }

}
