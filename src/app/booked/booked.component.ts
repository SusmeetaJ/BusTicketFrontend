import { Component, OnInit } from '@angular/core';
import { DeprecatedDatePipe } from '@angular/common';
import {UserService} from '../user.service'
@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent implements OnInit {
userid;journeyid;amt;seat;resdate;deptdate;booked;busobj;status;busid;bus;

  constructor(public service:UserService) { 
    this.userid=sessionStorage['userid'];
    this.deptdate=sessionStorage['DepartureDate'];
    this.amt=sessionStorage['Amount'];
    this.seat=sessionStorage['Seats'];
    this.busobj = JSON.parse(sessionStorage['selectedbus']);
    this.journeyid=this.busobj.JourneyId;
    this.busid=this.busobj.BusId;
    this.booked={
      "UserID":this.userid,
      "DepartureDate":this.deptdate,
      "ReserveDate":this.deptdate,
      "Amount":this.amt,
      "NoOfSeat":this.seat,
      "JourneyId":this.journeyid,
    };
    console.log(this.booked);
    console.log(this.busid);
   let result= this.service.MakeReservation(this.busid,this.booked);
   result.subscribe((data:any)=>{
    this.status=data.Data;
    console.log(this.status);
  });
  }

  ngOnInit() {
    this.bus=JSON.parse(sessionStorage['selectedbus']);
    console.log(this.bus);
    console.log(this.bus.JourneyId);
  }

}
