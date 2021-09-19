import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Component/registration/registration.component';
import { LoginComponent } from './Component/login/login.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }