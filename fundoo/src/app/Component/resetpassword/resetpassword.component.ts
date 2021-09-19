import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

resetpasswordForm!:FormGroup

constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
  this.resetpasswordForm = this.formBuilder.group({
    
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]

  });
}

// convenience getter for easy access to form fields
get f() { return this.resetpasswordForm.controls; }


}
