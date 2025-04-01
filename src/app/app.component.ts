import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodCart';
  
  //Default value is false to hide Home hyperlink in Header Component
  homeLinkVisible: boolean = false;


  onActivate(component: any) {
    //Checks if component loaded is Login component
    if (component.login){
      //Checks value from @Input loggedIn from Login component and stores it in isLoggedIn
      component.loggedIn.subscribe((isLoggedIn: boolean) => { 
        //Assigns the value from @Input loggedIn to homeLinkVisible
        this.homeLinkVisible = isLoggedIn;
      }); 
    } 
  } 

}
