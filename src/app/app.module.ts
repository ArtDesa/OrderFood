import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//FormsModule class imported from @angular/forms
//ReactiveFormsModule mported from @angular/forms (provides the infrastructure and directives needed to create and manage reactive forms.)
import { HttpClientModule } from '@angular/common/http'
//HttpClientModule class imported from @angular/common/http
/*HttpClientModule enables your Angular app to communicate with 
  back-end services over HTTP. It provides all the tools you need 
   to perform HTTP requests and responses (e.g., GET, POST, PUT, DELETE) 
   to interact with RESTful APIs or other web services. 
   HttpClientModule is a module that needs to be imported into your Angular application 
   to enable the use of the HttpClient service from Angular.*/
import { RouterModule, Routes } from '@angular/router';
/*RouterModule and Routes are essential components in Angular 
  that handle routing—the process of navigating between 
  different views or pages in an application. */
/*They allow client-side routing, allowing seamless navigation 
between components in the same Html page without reloading 
the entire HTML page. (swapping components within the same 
Html page without reloading everything)
*/
//RouterModule class imported from @angular/router
/*RouterModule provides the routing infrastructure needed to 
  define navigation paths, link components to routes, and 
  handle user interactions like URL changes.
*/
//Routes class imported from @angular/router
/*Routes is a TypeScript interface that defines the structure of 
routing configuration in Angular.
It represents an array of objects, where each object specifies:
Path: The URL fragment associated with the route.
Component: The Angular component to display for that route.
Children: Nested routes for hierarchical navigation.
Other Properties: Can include guards, resolvers, or redirects.
*/

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
//AppComponent class imported from app.component.ts (app module folder)
import { LoginComponent } from './login/login.component';
//LoginComponent class imported from login.component.ts (login module folder)
import { RegisterComponent } from './register/register.component';
//RegisterComponent class imported from register.component.ts (register module folder)
import { CartComponent } from './home/cart/cart.component';
//CartComponent class imported from cart.component.ts (home folder -> cart module folder)
import { DishComponent } from './home/dish/dish.component';
//DishComponent class imported from dish.component.ts (home folder -> dish module folder)
import { OrdersComponent } from './home/orders/orders.component';
//OrdersComponent class imported from orders.component.ts (home folder -> orders module folder)
import { HeaderComponent } from './header/header.component';
//HeaderComponent class imported from header.component.ts (header module)
import { HighlightDirective } from './directives/highlight.directive';
//HighlightDirective class imported from highlight.directive.ts (directives folder)
import { IngSearchPipe } from './pipes/ing-search.pipe';
//IngSearchPipe class imported from ing-search.pipe.ts (pipes folder)
import { ConfirmDirective } from './directives/confirm.directive';
//ConfirmDirective class from confirm.directives.ts (directives folder)
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//PageNotFoundComponent class from page-not-found.component.ts

//@NgModule -> decorator that is essential for organizing and managing the structure of an Angular application.
//declarations -> Components (as Class names), directives, and pipes
//imports -> prebuilt Angular modules and other external or custom modules that this module depends on. 
// ex: BrowserModule, FormsModule, HttpClientModule, etc...
//bootstrap -> Where is the root component Angular should use to initialize the program  
// array in the @NgModule metadata, specifies the root component that Angular should use to bootstrap (initialize) the application.
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component: HomeComponent, children:[
    {path:'cart', component: CartComponent},
    {path:'orders', component: OrdersComponent}
  ]},
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    DishComponent,
    OrdersComponent,
    HeaderComponent,
    HighlightDirective,
    IngSearchPipe,
    ConfirmDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
Before running the application, you need to start the JSON server (using db.json) with: json-server --watch db.json
This will launch the backend at a default URL, typically http://localhost:3000.
*Note: This will require the terminal used to run the command (the terminal will be busy running the server to take any other commands)
You must open another terminal to run the ng serve to start the Application.

ng command - Use to run application from the VS Code terminal. 
Run project from terminal with: ng serve
Stop the app when it is running with (in the terminal): Ctrl+C

This starts the Angular development server and compiles your app. By default, it runs on http://localhost:4200.
Open your browser and navigate to http://localhost:4200 to view your Angular app.

ng command is part of the Angular CLI (Command Line Interface).

Make sure the Angular CLI (Command Line Interface) is installed with: ng -version (if it is present)
If not installed, install it with: npm install -g @angular/cli

(npm commands are part of Node.js and stand for Node Package Manager. 
npm is used to install, manage, and update the dependencies (libraries, tools, etc.) required by your Angular project.))

To Create an Angular project use: ng new <my-angular-app>
*/