import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-showbuses',
  templateUrl: './showbuses.component.html',
  styleUrls: ['./showbuses.component.css']
})
export class ShowbusesComponent implements OnInit {
buses:any;
  constructor(public service:UserService,public router:Router) { }

  ngOnInit() {
    let buses = this.service.GetBus();
    buses.subscribe((data:any)=>
    {
      this.buses=data.Data;
    })
  }
  Add()
  {
    this.router.navigate(['addbus']);
  }
}
