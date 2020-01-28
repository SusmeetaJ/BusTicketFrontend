// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Http,Headers, RequestOptions} from "@angular/http"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public router:Router,public http: HttpClient) { }
  Login(credentials: any)
  {
    return this.http.post("http://localhost:50419//api/Login",credentials );
  }

  AddUser(Userdata: any)
  {
    return this.http.post("http://localhost:50419//api/User/Register",Userdata);
  }
  AddAdmin(Admindata:any)
  {
    return this.http.post(`http://localhost:50419//api/Admin/RegisterAdmin`,Admindata);
  }
  Logout(){
    sessionStorage.setItem("isloggedIn", "0");
    this.router.navigate(['/signIn']);
  }
  GetRoutes()
  {
    return this.http.get(`http://localhost:50419/api/AdminController/GetRoutes`);
  }
  AddRoute(route:any)
  {
    return this.http.post(`http://localhost:50419/api/AdminController/AddRoute`,route);
  }
  EditRoute(routeobj)
  {
    console.log(routeobj);
    return this.http.put(`http://localhost:50419/api/AdminController/EditRoute`,routeobj);
  }
  GetRouteByID(id)
  {
    return this.http.get(`http://localhost:50419/api/Admin/`+id);
  }
  UpdateRoute(routeobj)
  {
      return this.http.put(`http://localhost:50419/api/Admin/`+routeobj.RouteId,routeobj);
  }
  OTPGenerate(email)
  {
    alert("inside OTPGenerate ");
    var RUser={
      "EmailId":email,
      
     };

    return this.http.post(`http://localhost:50419/api/Account/IsExist`, RUser);
  }
  OTPValidate(otp,email)
  {
    
    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "OTP":otp
     };

   
     console.log(RUser);
    
    return this.http.post(`http://localhost:50419/api/Account/OTP`, RUser,);
  }

  Passwordreset(password,email)
  {

    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "Password":password,
      
     };

      console.log(RUser);
     
    return this.http.put(`http://localhost:50419/api/Account/UpdatePassword`, RUser);
  }
  
  GetBuses(credentials)
  {
    
    return this.http.post(`http://localhost:50419/api/BusBooking/GetBuses`,credentials);
  }
  GetCity()
  {
    return this.http.get(`http://localhost:50419/api/BusBooking/CityDetails`);
  }
  MakeReservation(id,obj)
  {
    return this.http.put(`http://localhost:50419/api/BusBooking/`+id,obj);
  }
  GetReservDetails()
  {
    return this.http.get("http://localhost:50419/api/AdminController/GetReservDetails");
  }
  GetBusById(No)
  {
   return this.http.get("http://localhost:50419/api/AdminController/GetBusById/" +No );
  }

  UpdateBus(busObject)
  {
    
    return this.http.put("http://localhost:50419/api/AdminController/UpdateBus/"+busObject.BusId,busObject);

  }

  GetBus()
  {
    return this.http.get("http://localhost:50419/api/AdminController/GetBuses");
  }

  AddBus(Busdata)
  {
    return this.http.post("http://localhost:50419/api/AdminController/AddBus",Busdata);
  }
  GetJourneyDetails()
  {
    return this.http.get('http://localhost:50419/api/AdminController/GetJourneyDetails');
  }
}

