import { HttpClient } from '@angular/common/http';
import { User, Login } from './user.module';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Request, RequestMethod, Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserserviceService {

  private loginUri = "http://localhost/seekerwebservices/profile.php";
  private profileUrl = "http://localhost/seekerwebservices/profile.php";
  
  constructor( private http: Http) { }

  /*UserProfileComponent Page Worker Detail profile page*/
  fetchPersonByID(personID:number) 
  {
      var jsonData = "personID="+personID+"&function=getProfileBytokenId";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  /*Register funtion*/
  registerUser(user : User)
  {
    console.log(user);
    const body: User =
    {
      userName : user.userName,
      userEmail : user.userEmail,
      password : user.password,
      repassword : user.repassword
    }

    var jsonData = "regArr="+JSON.stringify(user)+"&function=newRegistrationRec";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.profileUrl,jsonData,options);
  }

  /*Login funtion*/
  loginProfile(username: string, password: string)
  {
    var jsonData = "email="+username+"&password="+password+"&function=checkLoginCredential";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUri,jsonData,options);
  }

  /* New Searach Insert Function*/
  addNewSearch(location:string, timefrom:string, timeto:string, date:string){

    var jsonData = "tokenID="+JSON.parse(localStorage.getItem('tokkerID_Seeker'))+"&location="+location+"&timefrom="+timefrom+"&timeto="+timeto+"&date="+date+"&function=insertNewRecord";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUri,jsonData,options);
  }

  /*UserProfileComponent Page Worker Detail profile page*/
  getExistinglatest3SearchByPID(personID:number) 
  {
      var jsonData = "personID="+personID+"&function=getExistinglatest3SearchByPID";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  /*UserProfileComponent Page Worker Detail profile page*/
  getAllExistingSearchByPID(personID:number) 
  {
      var jsonData = "personID="+personID+"&function=getAllExistingSearchByPID";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  /*UserProfileComponent Page Worker Detail profile page*/
  addNewPost(personID:number, postext:string) 
  {
    var jsonData = "personID="+personID+"&post="+postext+"&function=addNewPost";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  /*UserProfileComponent Page Worker Detail profile page*/
  getAllPostsByPID(personID:number) 
  {
    var jsonData = "personID="+personID+"&function=getAllPostsByPID";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  /*UserProfileComponent Page Followers list in popup window */
  getAllFollowersByPID(personID:number) 
  {
    var jsonData = "personID="+personID+"&function=getAllFollowersByPID";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }
}
