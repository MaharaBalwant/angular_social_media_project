import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-afterlogin-menu',
  templateUrl: './afterlogin-menu.component.html',
  styleUrls: ['./afterlogin-menu.component.css']
})
export class AfterloginMenuComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem('tokkerID_Seeker', null);
    this.router.navigate(['/']);
  }
}
