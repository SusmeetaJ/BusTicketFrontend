import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-makeresrevation',
  templateUrl: './makeresrevation.component.html',
  styleUrls: ['./makeresrevation.component.css']
})
export class MakeresrevationComponent implements OnInit {
bus:any;
message:any;
Seats:any;

  constructor(public router:Router) { }

  ngOnInit() {
    this.bus=JSON.parse(sessionStorage['selectedbus']);
    console.log(this.bus);
    console.log(this.bus.JourneyId);
  }
  calculate()
  {
    if(this.Seats<this.bus.Available)
    {
      var amt=this.Seats*this.bus.JourneyFare;
     console.log(amt);
     console.log(this.Seats);
     sessionStorage['Seats']=this.Seats;
     sessionStorage['Amount']=amt;
     this.router.navigate(['payment']);
     // return amt;
    }
    else{
      this.message="only"+this.bus.Available+"seats are available";
    }  
  }
  Pay()
  {
    console.log(this.Seats);
    
    
  }
}
