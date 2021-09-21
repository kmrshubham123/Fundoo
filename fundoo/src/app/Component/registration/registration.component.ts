import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
<<<<<<< HEAD

=======
import { MatSnackBar } from '@angular/material/snack-bar';
>>>>>>> User_API_Integration



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registerForm! : FormGroup;



<<<<<<< HEAD
  constructor(private formBuilder: FormBuilder, private userService:UserService)  { }
=======
  constructor(private formBuilder: FormBuilder, private userService:UserService, private matSnackBar:MatSnackBar)  { }
>>>>>>> User_API_Integration

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
<<<<<<< HEAD
      
    }, (error:any) => {
      console.log(error);
      
=======
      this.matSnackBar.open("registration Successful ", ' ', {
        duration: 1000,
     });
      
    }, (error:any) => {

      console.log(error);
      this.matSnackBar.open("Registration Unsuccessful ", ' ', {
        duration: 1000,
     });

>>>>>>> User_API_Integration
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


}
