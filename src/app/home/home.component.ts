import { Component, OnInit } from '@angular/core';
import{ UserService} from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities:any;
  buses:any;
  constructor(public service:UserService,public router:Router) { }

  ngOnInit() {
    console.log("home component loaded");
    let result=this.service.GetCity();
    result.subscribe((data:any)=>{
      this.cities=data.Data;
      console.log(this.cities);
    });
  }
  Find(search)
  {
    alert("welcome");
    console.log(search.value);
    sessionStorage['DepartureDate']=search.value.DepartureDate;
    console.log(sessionStorage['DepartureDate']);
    let resultstate = this.service.GetBuses(search.value);
    resultstate.subscribe((data:any)=>
    {
      if(data.Status=="Success")
      {
        sessionStorage['BusObject'] =JSON.stringify(data.Data);
        console.log(sessionStorage['BusObject']);

        this.buses=data;

        this.router.navigate(['/searchbuses']);
        
      }
      
      else 
      {
        console.log(data);
        alert("No Buses Available...Sorry");
        this.router.navigate(['/home']);

      }
    });
  
    
}

}
