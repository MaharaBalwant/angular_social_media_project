import { User } from './../user.module';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '.././userservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  public display='none';
  user:User;
  model: any = {};
  blurVal:string = "blur(0px)";

  constructor(private userServices : UserserviceService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
    form.reset();
    this.user = {
      userName:'',
      userEmail:'',
      password:'',
      repassword:''
    }
  }

  onSubmitRegNewUser(form : NgForm)
  {
    this.model = form;

    this.userServices.registerUser(this.model).subscribe(response =>{
      if(response.json())
      {
        if( response.text() == '2' ){
          alert('Entered email already exists.. ');
        }
        if( response.text() == '1' ){
          alert('You have registered in seeker. Please login now...');
          this.resetForm();
          this.openLoginModal();
        }
      }
    });
  }

  openLoginModal(){
    this.display='block';
    this.blurVal = "blur(5px)";
  }

  onCloseHandled(){
    this.display='none';
    this.blurVal = "blur(0px)";
  }

}
