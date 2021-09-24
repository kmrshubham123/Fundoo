import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Component/registration/registration.component';
import { LoginComponent } from './Component/login/login.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
//import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { GetallnotesComponent } from './Component/getallnotes/getallnotes.component';



const routes: Routes = [

  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'resetpassword/:token',component:ResetpasswordComponent},
  //{path:'dash-board',component:DashBoardComponent}
  {path:'',redirectTo:"login",pathMatch:'full'}, //for redirect page 
  {path:'dashboard',component:DashboardComponent,
children:[
  {path:'note',component:GetallnotesComponent}
]}
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }