import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public service:UserService , public router : Router) { }

  ngOnInit() {
  }
  Login(credentials)
  {
      console.log(credentials);
     let resultstate=this.service.Login(credentials);
    
    resultstate.subscribe((data:any)=>{
      console.log
      if(data.Status=="Success")
      {
        sessionStorage.setItem("isloggedIn", "1");
        sessionStorage.setItem("UserDetails",data.Data);
        sessionStorage.setItem("userid",data.Data.UserId);
        sessionStorage.setItem("roleid",data.Data.RoleId);
        console.log(data.Data.UserId);
        alert("Login Success");
        if(data.Data.RoleId==1)
           this.router.navigate(['/dashboard']);
        else if(data.Data.RoleId==2)
            this.router.navigate(['/home']);
 
      }
      else{
        console.log(data);
        alert("Incorrect EmailId or Password");
        this.router.navigate(['/signin']);
      }
    }); 

  }

  ForgotPassword()
  {
    this.router.navigate(['/forgotp']);
  }
}
