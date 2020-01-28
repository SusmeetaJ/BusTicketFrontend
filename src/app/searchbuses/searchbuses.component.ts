import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-searchbuses',
  templateUrl: './searchbuses.component.html',
  styleUrls: ['./searchbuses.component.css']
})
export class SearchbusesComponent implements OnInit {
  buses:any;
  date:any;
  constructor(public router:Router) { }

  ngOnInit() {
    var busobj = JSON.parse(sessionStorage['BusObject']);
    console.log(busobj);
    this.buses=busobj;
    this.date=sessionStorage['DepartureDate'];
  }
SelectBus(b)
{
  console.log(b);
  sessionStorage['selectedbus']=JSON.stringify(b);
 // console.log(sessionStorage["selectedbus"]);
  alert("inside select bus function");
  this.router.navigate(['reserve']);
}
}
