import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registerForm! : FormGroup;



  constructor(private formBuilder: FormBuilder, private userService:UserService, private matSnackBar:MatSnackBar)  { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]

    });
  }

  onSubmit(){
    console.log("onsubmit function is calling  " , this.registerForm.value);
    let request ={
      firstName: this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      confirmPassword:this.registerForm.value.confirmPassword,
      service:"advance"

    }
    console.log(request)
    this.userService.registerUser(request).subscribe((response:any)=>{
      console.log(response);
      this.matSnackBar.open("registration Successful ", ' ', {
        duration: 1000,
     });
      
    }, (error:any) => {

      console.log(error);
      this.matSnackBar.open("Registration Unsuccessful ", ' ', {
        duration: 1000,
     });

    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


}
