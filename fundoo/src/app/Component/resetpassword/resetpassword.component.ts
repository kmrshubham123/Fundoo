import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
<<<<<<< HEAD
import {ActivatedRoute} from '@angular/router';
=======
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

>>>>>>> User_API_Integration

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

<<<<<<< HEAD
resetpasswordForm!:FormGroup
token:any
constructor(private formBuilder: FormBuilder, private userService : UserService , private activatedRoute:ActivatedRoute) { }
=======
  resetpasswordForm!: FormGroup
  token: any
  constructor(private formBuilder: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.resetpasswordForm = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]

    });
  }
  onSubmit() {
    this.token = this.activatedRoute.snapshot.paramMap.get('token')           //token same as app-routing
    console.log(this.token);


    localStorage.setItem('token', this.token)



    console.log("onsubmit function is calling  ", this.resetpasswordForm.value);
    let request = {

      newPassword: this.resetpasswordForm.value.password

    }
    console.log(request)
    this.userService.resetpasswordUser(request, this.token).subscribe((response: any) => {
      console.log(response);

      this.matSnackBar.open("Password Changed ", ' ', {
        duration: 1000,
     });

    }, (error: any) => {
      console.log(error);
>>>>>>> User_API_Integration

      this.matSnackBar.open("Failed to Change ", ' ', {
        duration: 1000,
     });

<<<<<<< HEAD
  });
}
onSubmit(){
  this.token = this.activatedRoute.snapshot.paramMap.get('token')           //token same as app-routing
  console.log(this.token);

  
  localStorage.setItem('token',this.token)
  


  console.log("onsubmit function is calling  " , this.resetpasswordForm.value);
  let request ={

    newPassword:this.resetpasswordForm.value.password

  }
  console.log(request)
  this.userService.resetpasswordUser(request,this.token).subscribe((response:any)=>{
    console.log(response);
    
  }, (error:any) => {
    console.log(error);
    
  })
}

showPassword(){
let confirmPassword=document.getElementById('confirmPassword');
}
// convenience getter for easy access to form fields
get f() { return this.resetpasswordForm.controls; }
=======
    })
  }

  showPassword() {
    let confirmPassword = document.getElementById('confirmPassword');
  }
  // convenience getter for easy access to form fields
  get f() { return this.resetpasswordForm.controls; }
>>>>>>> User_API_Integration


}