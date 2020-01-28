import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-reservdetails',
  templateUrl: './reservdetails.component.html',
  styleUrls: ['./reservdetails.component.css']
})
export class ReservdetailsComponent implements OnInit {
reserv:any;
message:any;
  constructor(public service:UserService) { }

  ngOnInit() {
    let result = this.service.GetReservDetails();
    result.subscribe((data:any)=>
        {
          if(data.Status=="Success")
          {
                 console.log(data.Data);
                  this.reserv=data.Data;
          }
          this.message="something went wrong";
        });
  }

}
