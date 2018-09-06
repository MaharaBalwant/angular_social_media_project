import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AfterloginMenuComponent } from './afterlogin-menu/afterlogin-menu.component';
import { AddinsearchComponent } from './addinsearch/addinsearch.component';
import { UserserviceService } from './userservice.service';
import { User } from './user.module';
import { Router, CanActivate } from '@angular/router';
import { NewsearchformComponent } from './newsearchform/newsearchform.component';
import { MatButtonModule, MatTableModule } from '@angular/material';


/* Custum code for authgard to block login page aftere logined users starts */
@Injectable()
class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private router:Router){};
  canActivate() {
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    if (personID != null) 
    {
      this.router.navigate(['/profile']);
      return false;
    } 
    else 
    {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
/* Custum code for authgard to block login page aftere logined users Ends */

const route = [
  {path:'home', component:HomepageComponent},
  {path:'profile', component:UserprofileComponent},
  {path:'addinsearch', component:AddinsearchComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path:'', component:HomepageComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomepageComponent,
    UserprofileComponent,
    AfterloginMenuComponent,
    AddinsearchComponent,
    NewsearchformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpModule,
    FormsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    UserserviceService,
    OnlyLoggedInUsersGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
