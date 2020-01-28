import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
amt:any;
seats:any;
paid:any;
  constructor(public router:Router) {
    this.seats=sessionStorage['Seats'];
    this.amt=sessionStorage['Amount'];
   }

  ngOnInit() {
  }
  pay()
  {
    if(this.paid==this.amt)
    {
      alert("payment successfully done");
        this.router.navigate(['booked']);
    }
  }
}
