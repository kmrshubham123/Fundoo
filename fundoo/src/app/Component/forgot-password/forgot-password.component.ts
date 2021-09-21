import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
<<<<<<< HEAD
=======
import { MatSnackBar } from '@angular/material/snack-bar';

>>>>>>> User_API_Integration
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;


<<<<<<< HEAD
  constructor(private formBuilder: FormBuilder , private userService : UserService ) { }
=======
  constructor(private formBuilder: FormBuilder, private userService: UserService,private matSnackBar:MatSnackBar) { }
>>>>>>> User_API_Integration

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]]

    });
  }

<<<<<<< HEAD
  onSubmit(){
    console.log("onsubmit function is calling  " , this.forgotPasswordForm.value);
    let request ={
      
      email: this.forgotPasswordForm.value.email,
      

    }
    console.log(request)
    this.userService.forgotUser(request).subscribe((response:any)=>{
      console.log(response);
      
    }, (error:any) => {
      console.log(error);
      
=======
  onSubmit() {
    console.log("onsubmit function is calling  ", this.forgotPasswordForm.value);
    let request = {

      email: this.forgotPasswordForm.value.email,


    }
    console.log(request)
    this.userService.forgotUser(request).subscribe((response: any) => {
      console.log(response);

      this.matSnackBar.open("Password Send to Your Email ", ' ', {
        duration: 1000,
     });

    }, (error: any) => {
      console.log(error);

      this.matSnackBar.open("Password Sending Failed", ' ', {
        duration: 1000,
     });

>>>>>>> User_API_Integration
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgotPasswordForm.controls; }


}