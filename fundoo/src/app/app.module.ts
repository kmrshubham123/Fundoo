import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatButtonModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
