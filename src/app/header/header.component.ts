import { Component, OnInit, Input } from '@angular/core'; //Input is for hiding Home until login is done

// Placeholders to be used elsewhere

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Hides Home hyperlink until first successful login
  @Input() isHomeVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
