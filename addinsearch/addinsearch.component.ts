import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './../userservice.service';


@Component({
  selector: 'app-addinsearch',
  templateUrl: './addinsearch.component.html',
  styleUrls: ['./addinsearch.component.css']
})
export class AddinsearchComponent implements OnInit {
  public records:any;
  public recordsAll:any;
  public displayedColumns: string[];
  public dataSource:any;

  constructor(private userServices:UserserviceService) { }

  ngOnInit() 
  {
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.customPageLoad(personID);
  }

  customPageLoad(personID){
    this.userServices.getExistinglatest3SearchByPID(personID).subscribe(response =>{ 
      if(response.json())
      {
        this.records = Array.of(JSON.parse(response.text()));
        this.records = this.records[0];
      }
    });

    this.userServices.getAllExistingSearchByPID(personID).subscribe(response =>{ 
      if(response.json())
      {
        this.recordsAll = Array.of(JSON.parse(response.text()));
        this.recordsAll = this.recordsAll[0];
        this.displayedColumns = ['position','location', 'time_to', 'time_from', 'date'];
        this.dataSource = this.recordsAll;
      }
    });
  };


}
