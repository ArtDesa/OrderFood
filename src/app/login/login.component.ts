import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router:Router, private server: BackendService) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    username:['',[Validators.required, Validators.minLength(6)]],
    password:['', Validators.required],
    confirmPassword:['', Validators.required]
  },{
    validators: this.confirmValidator()
  })

  usernameError = this.loginForm.get('username').invalid

  confirmValidator(): ValidatorFn{
    return(control:AbstractControl): ValidationErrors =>{
      let error;

      if(control.value.password != control.value.confirmPassword){
        error = {"matchingError": true}
      }

      return error;
    }
  }

  login(){
    let body = {
      username: this.username.value,
      password: this.loginForm.get('password')
    }

    let verified;

    //valid users can't login for some reason. verified it coming out as false
    this.server.login().subscribe((data)=>{
      for(let i=0; i<data.length; i++){
        if(body.username === data[i].username && body.password === data[i].password){
          verified = true;
        }
      }
      verified = false;
    });

    if(verified){
      this.router.navigate(['home']);
    }
    else{
      alert("User does not exist or password does not match!")
    }
    
  }

  get username(){
    return this.loginForm.get('username');
  }

}
