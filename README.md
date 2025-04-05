# OrderFood
This application allows users to register, login, and add different dishes they with to order to their cart. 
It makes use of a JSON server to act as a backend to store and retrieve data of users registered and dishes the app displays for users to order.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## How to start the OrderFood app

Start the JSON server 'backend' first (uses db.json file) that stores and retrieves data with: `json-server --watch db.json`. This is hosted at `http://localhost:3000/`.
Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Quick Guideline

Provide a Username and Password for an already existing account or proceed to the Register page to create a new login. 
Once logged in, the Home page will be loaded displaying the available dishes. The user can then select which dishes and how many of each dish they would like to add to their cart.
The Cart button in the top right corner will display the Cart page showing which dishes, the amount of each dish, their price, and the total price the user will need to pay.
