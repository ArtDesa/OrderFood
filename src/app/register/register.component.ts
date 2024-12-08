import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private server: BackendService) { }

  ngOnInit(): void {
  }

  onSubmit(register, address){
    let user = {
      username: register.controls.username.value,
      password: register.controls.password.value,
      address: {
        street: address.controls.street.value,
        zip: address.controls.zip.value
      }
    }
    
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
