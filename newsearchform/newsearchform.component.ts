import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
/*import { map } from 'rxjs/operators';*/
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { UserserviceService } from './../userservice.service';

@Component({
  selector: 'app-newsearchform',
  templateUrl: './newsearchform.component.html',
  styleUrls: ['./newsearchform.component.css']
})
export class NewsearchformComponent implements OnInit {
  loading = false;
  dataObj: any = {};

  constructor(private userServices: UserserviceService) { }

  ngOnInit() {  }

  newsearch(){
    console.log(this.dataObj);
    this.loading = true;
    this.userServices.addNewSearch(this.dataObj.location, this.dataObj.timefrom, this.dataObj.timeto, this.dataObj.date).subscribe(response =>{
      this.loading = false;
      window.location.reload();
    });
  }

}
