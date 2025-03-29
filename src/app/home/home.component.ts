import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BackendService } from "../services/backend.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

/*HomeComponent class no longer has an array property dishes[] that 
  holds multiple objects {} (has been commented out below). 
  Check the bottom of the page for comments explaining what it does instead.

  Describing what was commented out below: 
  (Each object has multiple key-pair values 
  Example: {"id":1, "price":5}, {"id":2, "price":6}, {"id":3, "price":7}} 
  Each {} object is a dish, each dish has multiple key-value pairs) */
export class HomeComponent implements OnInit{
    // dishes=[
    //     {
    //       "id": 1,
    //       "dish": "Tikka Masala",
    //       "ingredients": [
    //         "olive oil",
    //         "chicken",
    //         "onion",
    //         "cloves garlic",
    //         "ginger",
    //         "jalapeno",
    //         "turmeric",
    //         "cumin",
    //         "paprika",
    //         "masala",
    //         "cayenne pepper",
    //         "tomatoes",
    //         "heavy cream",
    //         "Kosher salt",
    //         "cilantro",
    //         "rice",
    //         "naan"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/tikka-masala.png"
    //     },
    //     {
    //       "id": 2,
    //       "dish": "Truffled Pizza",
    //       "ingredients": [
    //         "dough",
    //         "shiitake mushroom",
    //         "cremini mushrooms",
    //         "portobello mushrooms",
    //         "fontina cheese",
    //         "thyme",
    //         "truffle oil",
    //         "parmesan cheese"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/truffled-pizza.png"
    //     },
    //     {
    //       "id": 3,
    //       "dish": "Mujadara",
    //       "ingredients": [
    //         "olive oil",
    //         "onion",
    //         "rice",
    //         "garlic",
    //         "lentils",
    //         "cumin",
    //         "salt"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/mujadara.png"
    //     },
    //     {
    //       "id": 4,
    //       "dish": "Meat Lover Burger",
    //       "ingredients": [
    //         "bun",
    //         "onion",
    //         "ground beef",
    //         "special sauce",
    //         "bacon"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/meat-burger.png"
    //     },
    //     {
    //       "id": 5,
    //       "dish": "Salmon with Steamed Veggies",
    //       "ingredients": [
    //         "salmon",
    //         "butter",
    //         "broccli",
    //         "carrot",
    //         "special sauce",
    //         "rice"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/salmon.png"
    //     },
    //     {
    //       "id": 6,
    //       "dish": "Honey Shrimp",
    //       "ingredients": [
    //         "honey",
    //         "butter",
    //         "shrimp",
    //         "rice",
    //         "soy sauce",
    //         "sesame oil",
    //         "sesame seeds"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/honey-shrimp.png"
    //     },
    //     {
    //       "id": 7,
    //       "dish": "Veggie Meatballs",
    //       "ingredients": [
    //         "beyond meat",
    //         "olive oil",
    //         "mushrooms",
    //         "onion",
    //         "crumbled bread",
    //         "carrot",
    //         "flour"
    //       ],
    //       "tags": [
    //         "veg",
    //         "nonDairy"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/veggie-meatballs.png"
    //     },
    //     {
    //       "id": 8,
    //       "dish": "Tacos",
    //       "ingredients": [
    //         "ground beef",
    //         "lettuce",
    //         "onion",
    //         "taco sauce",
    //         "soft tacos",
    //         "cheese"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/tacos.png"
    //     },
    //     {
    //       "id": 9,
    //       "dish": "Veggie Burger",
    //       "ingredients": [
    //         "beyond meat",
    //         "olive oil",
    //         "bun",
    //         "onion",
    //         "lettuce",
    //         "tomato",
    //         "pickles"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/veggie-burger.png"
    //     },
    //     {
    //       "id": 10,
    //       "dish": "Lemon Chicken",
    //       "ingredients": [
    //         "lemon",
    //         "chicken",
    //         "heavy cream",
    //         "onion",
    //         "garlic",
    //         "maggi",
    //         "dill",
    //         "rice"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/lemon-chicken.png"
    //     },
    //     {
    //       "id": 11,
    //       "dish": "Chicken Alfredo",
    //       "ingredients": [
    //         "chicken",
    //         "cheese",
    //         "flour",
    //         "mushroom",
    //         "rice",
    //         "milk",
    //         "thyme",
    //         "rosemary"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/chicken-alfredo.png"
    //     },
    //     {
    //       "id": 12,
    //       "dish": "Dumplings",
    //       "ingredients": [
    //         "pork",
    //         "sesame oil",
    //         "soy sauce",
    //         "pepper",
    //         "green onion",
    //         "mushroom",
    //         "carrot",
    //         "shrimp",
    //         "ginger",
    //         "garlic",
    //         "red cabbage",
    //         "vinegar",
    //         "red pepper flake"
    //       ],
    //       "price": 5,
    //       "pic": "assets/pics/dumplings.png"
    //     }
    // ]

    //Instead, it has the "dishes" property and "ingredient"='' property
    dishes;

    ingredient = '';

    /*The constructor takes arguments for 
    ActivatedRoute object, Router object, BackendService object */
    constructor(public route: ActivatedRoute, private router: Router, private server: BackendService) { }

    /*ngOnInit()-> When initialized, uses BackendService's getDishes() method to assign 
      the data in the db.json file of the dishes to the local variable "dishes" */
    /*Use ngOnInit() to perform more complex setup tasks that rely on Angular's lifecycle, 
    such as fetching data from a service, initializing input properties, or 
    interacting with the DOM. */
    ngOnInit(){
      this.server.getDishes().subscribe((data)=>{
        this.dishes = data;
      });
      
    }

    /* Sends user to the cart html page when the Cart button is pressed. 
    Check home.component.html for use */
    goToCart(){
      this.router.navigate(['/home/cart']);
    }

    /* Sends user to the orders html page when the Orders button is pressed. 
    Check home.component.html for use */
    goToOrders(){
      this.router.navigate(['/home/orders']);
    }
}