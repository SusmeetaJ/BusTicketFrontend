import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../user.service';
@Component({
  selector: 'app-editbuses',
  templateUrl: './editbuses.component.html',
  styleUrls: ['./editbuses.component.css']
})
export class EditbusesComponent implements OnInit {
bus;
message:any;
  constructor(public service:UserService,
    public router:Router,
    public routes:ActivatedRoute) { }

  ngOnInit() {
    let arrivalparam = this.routes.paramMap;

    arrivalparam.subscribe((params)=>{
      let No = params.get("No");
      
      let serachbus = this.service.GetBusById(No);
      console.log(serachbus);
      serachbus.subscribe((result:any)=>{
        if(result.Status=="success")
        {
          console.log(result.Data);
          this.bus = result.Data;
          this.message ="Record Found";
        }
        else
        {
          this.message="Record Not Found";
        }
      });

     });


  }
  Update()
  {
    let busupdate = this.service.UpdateBus(this.bus);
    busupdate.subscribe((result:any)=>
    {
      if(result.status="success")
      {
        this.router.navigate(['showbuses']);
      }
      else{
        this.message="something went wrong";
      }
    })
  }


}
