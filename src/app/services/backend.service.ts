import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  /*It is of type Observable<any> so that we can make sure that this http call we are 
  going to make is able to be watchede and able to have that information pulled 
  and properly sent to us so we can watch it.*/
  getDishes(): Observable<any>{
    return this.http.get('http://localhost:3000/dishes')
  }

  addDish(dish): Observable<any>{
    return this.http.post('http://localhost:3000/dishes',dish)
  }

  getUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/users')
  }

  register(user): Observable<any>{
    return this.http.post('http://localhost:3000/users',user).pipe(
      catchError(this.handleErrors)
    )
  }

  login(): Observable<any>{
    return this.http.get('http://localhost:3000/users');
  }

  handleErrors(error){
    return throwError(error)
  }
}
