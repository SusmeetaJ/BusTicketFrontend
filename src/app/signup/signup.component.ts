import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  id:any;
  constructor(public service:UserService , public router : Router) { }

  ngOnInit() {
  }
  AddUser(credentials)
  {
      console.log(credentials);
      this.id=sessionStorage.getItem("roleid");
      if(this.id==1)
      {
        var resultstate=this.service.AddAdmin(credentials); 
       
      }
       else 
       {
           var resultstate=this.service.AddUser(credentials);
       }
       
    
    resultstate.subscribe((data:any)=>{
      
      if(data.Status=="Success")
      {
       
        alert("Registration done");
        this.router.navigate(['/signin']);
 
      }
      else{
        console.log(data);
        alert("Something Went Wrong");
        this.router.navigate(['/signup']);
      }
    }); 

  }

}
