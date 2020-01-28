import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PwdchangeComponent } from './pwdchange/pwdchange.component';
import { OnlineusersComponent } from './onlineusers/onlineusers.component';
import { RolesComponent } from './roles/roles.component';
import { PwdhistorylogComponent } from './pwdhistorylog/pwdhistorylog.component';
import { from } from 'rxjs';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AdminComponent } from './addroute/admin.component';
import { ShowroutesComponent } from './showroutes/showroutes.component';
import { EditrouteComponent } from './editroute/editroute.component';
import { SignoutComponent } from './signout/signout.component';
import { AuthService } from '../app/auth.service';
import { SearchbusesComponent } from './searchbuses/searchbuses.component';
import { MakeresrevationComponent } from './makeresrevation/makeresrevation.component';
import { PaymentComponent } from './payment/payment.component';
import { BookedComponent } from './booked/booked.component';
import { ReservdetailsComponent } from './reservdetails/reservdetails.component';
import { JourneydetailsComponent } from './journeydetails/journeydetails.component';
import { AddbusesComponent } from './addbuses/addbuses.component';
import { ShowbusesComponent } from './showbuses/showbuses.component';
import { EditbusesComponent } from './editbuses/editbuses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    PwdchangeComponent,
    OnlineusersComponent,
    RolesComponent,
    PwdhistorylogComponent,
    ForgotpasswordComponent,
    AdminComponent,
    ShowroutesComponent,
    EditrouteComponent,
    SignoutComponent,
    SearchbusesComponent,
    MakeresrevationComponent,
    PaymentComponent,
    BookedComponent,
    ReservdetailsComponent,
    JourneydetailsComponent,
    AddbusesComponent,
    ShowbusesComponent,
    EditbusesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component:HomeComponent},
      { path: 'about', component:AboutComponent},
      { path: 'contact', component:ContactComponent},
      { path: 'signup', component:SignupComponent},
      { path: 'signin', component:SigninComponent},
      { path: 'forgotp', component:ForgotpasswordComponent},
      {path:'admin',component:AdminComponent,canActivate:[AuthService]},
      {path:'showroute',component:ShowroutesComponent,canActivate:[AuthService]},
      {path:'editroute/:No',component:EditrouteComponent,canActivate:[AuthService]},
      {path:'signout',component:SignoutComponent},
      {path:'searchbuses',component:SearchbusesComponent},
    {path:'reserve',component:MakeresrevationComponent,canActivate:[AuthService]},
    {path:'payment',component:PaymentComponent,canActivate:[AuthService]},
    {path:'booked',component:BookedComponent,canActivate:[AuthService]},
    {path:'reserv',component:ReservdetailsComponent,canActivate:[AuthService]},
    {path:'journeydetails',component:JourneydetailsComponent,canActivate:[AuthService]},
    {path:'addbus',component:AddbusesComponent,canActivate:[AuthService]},
    {path:'showbuses',component:ShowbusesComponent,canActivate:[AuthService]},
    {path:'editbuses/:No',component:EditbusesComponent,canActivate:[AuthService]},
   {path:'dashboard',component:DashboardComponent,children:[
     {path:'showbuses',component:ShowbusesComponent,canActivate:[AuthService]},
     {path:'journeydetails',component:JourneydetailsComponent,canActivate:[AuthService]}, 
     {path:'reserv',component:ReservdetailsComponent,canActivate:[AuthService]},
     {path:'showroute',component:ShowroutesComponent,canActivate:[AuthService]},
     {path:'editroute/:No',component:EditrouteComponent,canActivate:[AuthService]},
     {path:'addbus',component:AddbusesComponent,canActivate:[AuthService]},
     {path:'editbuses/:No',component:EditbusesComponent,canActivate:[AuthService]},
     {path:'admin',component:AdminComponent,canActivate:[AuthService]},
   ]
  }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
