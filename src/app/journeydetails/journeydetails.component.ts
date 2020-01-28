import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service';
@Component({
  selector: 'app-journeydetails',
  templateUrl: './journeydetails.component.html',
  styleUrls: ['./journeydetails.component.css']
})
export class JourneydetailsComponent implements OnInit {
  journey;
  message;
  constructor(public service:UserService) { }

  ngOnInit() {
    let result = this.service.GetJourneyDetails();
    result.subscribe((data:any)=>
        {
          if(data.Status=="success")
          {
                 console.log(data.Data);
                  this.journey=data.Data;
          }
          this.message="something went wrong";
        });
  }

}
