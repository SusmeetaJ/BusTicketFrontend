import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    delete sessionStorage["userid"];
    delete sessionStorage["roleid"];
    delete sessionStorage["UserDetails"];
    delete sessionStorage["isloggedIn"];
  }

}
