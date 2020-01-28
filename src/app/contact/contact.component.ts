import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id:any;
  constructor(public service:UserService , public router : Router) { }

  ngOnInit() {
     
  }
home()
{
  this.router.navigate(['home']);
}
}
