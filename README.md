# OrderFood
This application allows users to register, login, and add different dishes they with to order to their cart. 
It makes use of a JSON server to act as a backend to store and retrieve data of users registered and dishes the app displays for users to order.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## How to start the OrderFood app

Start the JSON server 'backend' first (uses db.json file) that stores and retrieves data with: `json-server --watch db.json`. This is hosted at `http://localhost:3000/`.
Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
