import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 
  title = 'Seeker';
  public display:string = 'none';

  constructor() { }

  ngOnInit() {
  }
}
