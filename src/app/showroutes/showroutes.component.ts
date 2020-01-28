import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showroutes',
  templateUrl: './showroutes.component.html',
  styleUrls: ['./showroutes.component.css']
})
export class ShowroutesComponent implements OnInit {
  routes;
  constructor(public service:UserService, public router : Router) { }

  ngOnInit() {
    console.log("Admin Component Loaded")
    let resultstate=this.service.GetRoutes();
    resultstate.subscribe((data:any)=>{
      console.log(data);
      this.routes = data.Data;
    });
  }
  GoToAdd()
  {
    //console.log("Route to register");
   this.router.navigate(['admin']);
  }

}
