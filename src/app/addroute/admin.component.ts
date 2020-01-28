import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { Router } from '@angular/router';
  import { from } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id:any;
  constructor(public service:UserService, public router : Router) { }

  ngOnInit() {
    this.id=sessionStorage.getItem("userid");
    console.log(this.id);
    if(this.id==null)
     this.router.navigate(['/signin']); 
  }

  AddRoute(route)
  {
    let resultstate=this.service.AddRoute(route);
    resultstate.subscribe((data:any)=>{
      
      if(data.Status=="Success")
      {
       
        alert("Successfully added");
        this.router.navigate(['/showroute']);
 
      }
      else{
        console.log(data);
        alert("Something Went Wrong");
        this.router.navigate(['/contact']);
      }
    }); 
  }
}
