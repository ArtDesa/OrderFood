import { Component, OnInit } from '@angular/core';
//OnInit -> allows the component to execute logic when it is initialized.
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /* The constructor is used for dependency injection 
  (injecting services or dependencies into the component). 
  In this case, it takes a Router object and BackendService object. */
  constructor(private router: Router, private server: BackendService) { }

  ngOnInit(): void {
  }
  /*onSubmit()-> takes a register object and a address object. Retrieves the username and 
   street values */
  onSubmit(register, address){
    //user object
    let user = {
      //user object has properties username, password, address
      //Stores values from register object in the corresponding properties
      username: register.controls.username.value,
      password: register.controls.password.value,
      //Stores values from address object in the street and zip properties inside address object
      address: {
        street: address.controls.street.value,
        zip: address.controls.zip.value
      }
    }
    
    /*Takes the BackendService object (server) and uses 
      its register() method with the user object defined above 
      to store the values in our db.json instance */
    this.server.register(user).subscribe(query=>{
      if(query){
        this.router.navigate(['login']);
      }
      else{
        alert('Post was unable to complete.');
      }
    })
  }

}
