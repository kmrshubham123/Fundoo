import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'; //import from app-routing.ts


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private userService: UserService,private matSnackBar:MatSnackBar,
               private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    });
  }

  onSubmit() {
    console.log("onsubmit function is calling", this.loginForm.value);
    let request = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password

    }
    console.log(request)
    this.userService.loginUser(request).subscribe((response: any) => {
      console.log(response)

      localStorage.setItem('token',response.id)
      //Dashboard Router setting
      this.router.navigateByUrl('/dashboard')

      this.matSnackBar.open("Login Successful ", ' ', {
        duration: 1000,
     });



    }, (error: any) => {
      console.log(error)

      this.matSnackBar.open("Login Unsuccessful ", ' ', {
        duration: 1000,
     });

    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


}