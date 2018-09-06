import { UserserviceService } from './../userservice.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { Login } from './../user.module';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loginArr: any = {};
  loading = false;
  returnUrl: string;
  public logsucess$: Observable<Login[]>;
  loginInof: Login = new Login();

  constructor(private router:Router,private userServices : UserserviceService) { }

  ngOnInit() {
    //this.resetForm();
  }

  resetForm():void
  {
    this.loginInof.functionm='';
    this.loginInof.email='';
    this.loginInof.password='';
  }

  login() 
  {
    this.loading = true;

    this.userServices.loginProfile(this.model.username, this.model.password).subscribe(response =>{
      if(response.json())
      {
        var res = JSON.parse(response.text());
        if(res.id != '' || res.id != null)
        {
          localStorage.setItem('tokkerID_Seeker', res.id);
          this.router.navigate(['/profile']);
        }
        else
        {
          alert('Login Credentials Failed');
          localStorage.setItem('tokkerID_Seeker', null);
        }
      }
      else
      {
        alert('Login Credentials Failed');
        this.loading = false;
      }
    },
    error => {
        this.loading = false;
    });
  }

}
