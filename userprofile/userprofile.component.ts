import { User } from './../user.module';
import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { UserserviceService } from '.././userservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  public users:any = [];
  public posts:any = [];
  public followers:any = [];
  public profilename:string;
  public address1:string;
  public address2:string;
  public city:string;
  public state:string;
  public country:string;
  public zipcode:string;
  public phone:string;
  public display:string = 'none';

  constructor(private http:Http, private userService: UserserviceService) {
    this.userService = userService;
   }

  ngOnInit() 
  {
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));

    this.userService.fetchPersonByID(personID).subscribe(response =>{
      if(response.json())
      {
        this.users = Array.of(JSON.parse(response.text()));
        this.profilename = this.users[0].first_name+' '+this.users[0].last_name;
        this.address1 = this.users[0].address1;
        this.address2 = this.users[0].address2;
        this.city = this.users[0].city;
        this.state = this.users[0].state;
        this.country = this.users[0].county;
        this.zipcode = this.users[0].pin_code;
        this.phone = '+'+91+'-'+this.users[0].phone;
      }
    });

    this.refreshHomePagePost();
  }

  addNewPost(postValue:string){
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.userService.addNewPost(personID, postValue).subscribe(response =>{
      if(response.json())
      {
        this.refreshHomePagePost();
      }
    });
  }

  refreshHomePagePost()
  {
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.userService.getAllPostsByPID(personID).subscribe(response =>{
      if(response.json())
      {
        this.posts = Array.of(JSON.parse(response.text()));
        this.posts = this.posts[0];
      }
    });
  }

  /* My Followers Script Start */
  openFollowersModal(){
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.userService.getAllFollowersByPID(personID).subscribe(response =>{
      if(response.json())
      {
        this.followers = Array.of(JSON.parse(response.text()));
        this.followers = this.followers[0];
      }
    });
    this.display='block';
  }

  onCloseHandled(){
    this.display='none';
  }
  /* My Followers Script Ends */
}

