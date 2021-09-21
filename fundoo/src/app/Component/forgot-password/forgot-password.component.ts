import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm! : FormGroup;


  constructor(private formBuilder: FormBuilder , private userService : UserService ) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]]
      
    });
  }

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
      
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgotPasswordForm.controls; }


}
