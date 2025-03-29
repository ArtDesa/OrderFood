//This is a Service
//Services require importing Injectable and are defined by having a @Injectable decorator.
//They make use of Dependency Injection (DI).

/* The backend.service.ts service assumes there is a backend running at http://localhost:3000. 
If there’s no real backend available yet, it’s often paired with a tool like JSON Server or an 
in-memory database to simulate the API endpoints (/dishes, /users, etc.) for testing and local development. 
We are using the db.json file in the foodcart folder itself to simulate a backend. 
*/

/* db.json-> is a JSON file that serves as a simple, static mock database. 
It contains structured data that mimics what you would retrieve from a real backend or API. 
The db.json we are using already has the dishes we will use stored in it, 
as well as some pre-filled values for users that are included when the App is started.
(ex: It already has some pre-written users which can be seen defined in the file itself. 
users with username "asdasd" and "johnDoe") */

import { HttpClient } from '@angular/common/http';
/* HttpClient is used to perform HTTP requests and handle responses, 
allowing your Angular application to communicate with back-end servers or APIs. 
It simplifies sending and receiving data over HTTP, making tasks 
like GET, POST, PUT, DELETE, and PATCH requests much more manageable. 
You can only import and use HttpClient because HttpClientModule is imported in app.module.ts*/
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

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
  /* providedIn: 'root'-> ensures that this service is available app-wide as a singleton, 
  meaning only one instance of this service is shared across the entire application. */
})
export class BackendService {

  /* The HttpClient is injected into the service through Angular's Dependency Injection system. 
  This allows the service to use Angular's HttpClient methods (get, post, etc.) 
  to make HTTP requests to the backend.*/
  constructor(private http: HttpClient) { }
  
  /*It is of type Observable<any> so that we can make sure that this http call we are 
  going to make, is able to be watched ("subscribed" to it) and able to have that information pulled 
  and properly sent to us so we can watch it.*/

  /* Makes a GET request to fetch a list of dishes from the /dishes endpoint of the backend API. */
  getDishes(): Observable<any>{
    return this.http.get('http://localhost:3000/dishes')
  }
  // Returns an Observable<any> that emits the response from the backend when the data is available.

  /* Makes a POST request to add a new dish to the /dishes endpoint. */
  addDish(dish): Observable<any>{
    return this.http.post('http://localhost:3000/dishes',dish)
  }
  /* Takes dish (the object representing the new dish) as an argument and sends it in the body of the request.
     Returns an Observable<any> to allow components to react to the success or failure of the request.
  */

  /* Makes a GET request to fetch a list of users from the /users endpoint of the backend API. */
  getUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/users')
  }
  /* Returns an Observable<any>. */

  /* Makes a POST request to register a new user at the /users endpoint.
     Takes user (the object representing the new user) as an argument. 
     Uses .pipe to chain a catchError operator that calls the handleErrors method if an error occurs.*/
  register(user): Observable<any>{
    return this.http.post('http://localhost:3000/users',user).pipe(
      catchError(this.handleErrors)
    )
  }
  /* Returns an Observable<any>. */

  /* Makes a GET request to the /users endpoint as part of a login process 
  to retrieve user information. */
  login(): Observable<any>{
    return this.http.get('http://localhost:3000/users');
  }
  /* Returns an Observable<any>. */

  /* Handles errors that occur during HTTP requests. 
    Uses throwError from RxJS to return the error object as an Observable that can be subscribed to. 
    This allows components to react to errors, such as displaying error messages 
    or taking corrective actions. */
  handleErrors(error){
    return throwError(error)
  }
  /* Returns an Observable<any>. */
}
