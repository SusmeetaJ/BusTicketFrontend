import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addbuses',
  templateUrl: './addbuses.component.html',
  styleUrls: ['./addbuses.component.css']
})
export class AddbusesComponent implements OnInit {
message:any;
  constructor(public service:UserService,public router:Router) { }

  ngOnInit() {
  }
  AddBus(Busdata)
  {
    let resultstate = this.service.AddBus(Busdata);
    resultstate.subscribe((data:any)=>
    {
      if(data.Status=="success")
      {
        this.router.navigate(['/showbuses']);
      }
      else{
          this.message="something went wrong";
          this.router.navigate(['/addbus']);
      }
    })
  
  }
  
}
