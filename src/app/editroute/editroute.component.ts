import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../user.service';
@Component({
  selector: 'app-editroute',
  templateUrl: './editroute.component.html',
  styleUrls: ['./editroute.component.css']
})
export class EditrouteComponent implements OnInit {
  route;
  message;
  constructor(public service:UserService,
              public router:Router,
              public routes:ActivatedRoute) { }

  ngOnInit() {
    let parameterArrivalStatus = this.routes.paramMap;

    parameterArrivalStatus.subscribe((params)=>{
      let No = params.get("No");
      console.log(params.get("No"));
      let StatusofEmpSearched= this.service.GetRouteByID(No);
      this.message="";
      StatusofEmpSearched.subscribe((result:any)=>{
         console.log(result);
         console.log(result.Data);
        if(result.Status=="Found")
        {
          this.route = result.Data;
          console.log(this.route);
          //console.log(this.emp.name);
          this.message = "Record found!"
          
        }
        else
        {
          this.message = "Record not found!"
        }
      }); 

    });
  }
  Update()
  {
    let statusOfUpdate= this.service.UpdateRoute(this.route);
    statusOfUpdate.subscribe((result:any)=>{
      console.log(result);
      if(result.Status=="Updated")
      {
        this.router.navigate(['showroute']);
      }
      else{
        this.message = "Something went wrong!";
      }
    });
  }

  
}
