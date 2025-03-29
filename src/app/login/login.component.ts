import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

/* 
AbstractControl-> base class for all form controls, including FormControl, FormGroup, and FormArray.
                  It provides common properties and methods used to manage the state, value, and validation of form controls.
FormBuilder-> a service provided by Angular to simplify the creation of form controls, groups, and arrays.
                  It reduces boilerplate code by offering convenient methods to create reactive forms.
ValidationErrors-> an interface used to define the structure of validation error objects.
                  When a validation fails, the control’s errors property contains these objects.
ValidatorFn-> a function type used to define custom validators for form controls.
                  It takes a control (of type AbstractControl) and returns ValidationErrors or null.
Validators-> a built-in Angular class with a set of predefined validation functions like required, min, max, email, etc.
                  These are commonly used for both template-driven and reactive forms.
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Form Builder object "fb", Router object "router", BackendService object "server"
  constructor(private fb: FormBuilder, private router:Router, private server: BackendService) { }

  ngOnInit(): void {
  }

  //We first give our form a name. "loginForm"
  //loginForm is the name/reference to our <form> on the html Template page.
  // loginForm = this.fb.group({...any controls we want to exist in the form...}, {...})    fb -> check constructor parameters above
  // We do .group to indicate we are creating a form group.
  loginForm = this.fb.group({
    //Validators is the keyword to refer to a validator. .required -> user needs to fill out element, minLength() -> what it sounds like
    //These are the controls we want to exist on our form:
    username:['',[Validators.required, Validators.minLength(6)]],
    password:['', Validators.required],
    confirmPassword:['', Validators.required]
  },{
    //Check the confirmValidator() method defined below
    validators: this.confirmValidator()
  })

  //loginForm is the name/reference to our <form> on the html Template page.
  usernameError = this.loginForm.get('username').invalid

  //confirmValidator(): ValidatorFn{} method-> checks for erros and if requirements are fufilled
  confirmValidator(): ValidatorFn{
    /*Make sure it returns a control of type AbstractControl. 
      And with that, this it is going to return this as a set of validation errors. 
      Then use => to open up an arrow function and have everything else inside. */
    return(control:AbstractControl): ValidationErrors =>{
    /*It takes in the control that it is called on in this.confirmValidator. 
    That is of type ValidationErrors. */

      //Createas our error
      let error;

      //Creates this matching error if it does exist:
      if(control.value.password != control.value.confirmPassword){
        error = {"matchingError": true}
      }

      //Passes it back through.
      return error;
    }
  }

  /*This is for the Submit button on the html Template (login.component.html). 
    Hitting the submit/login button will call this function */
  login(){
    let body = {
      username: this.username.value,
      password: this.password.value //loginForm.get('password')
    }

    
    this.server.login().subscribe((data)=>{
      let verified = false;

      for(let i=0; i<data.length; i++){
        console.log("The loop iteration:", i);
        console.log("The body.username: ", body.username);
        console.log("The data[i].username: ", data[i].username);
        console.log("The body.password: ", body.password);
        console.log("The data[i].password: ", data[i].password);
        console.log("--------------------------------------------");
        
        if(body.username === data[i].username && body.password === data[i].password){
          console.log("Reached inside if statement of for loop");
          verified = true;
          break;
        }
      }
      
      if(verified){
        this.router.navigate(['home']);
      }
      else{
        alert("User does not exist or password does not match!")
      }

    });
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
