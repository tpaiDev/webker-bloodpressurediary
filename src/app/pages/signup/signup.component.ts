import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.signUpForm.value);
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
  
    if (!email || !password) {
      console.error('Email or password is empty!');
      return;
    }
  
    this.authService.signup(email, password).then(cred => {
      console.log(cred);
    }).catch(error => {
      console.error(error);
    });
  }
  

  goBack() {
    this.location.back();
  }

}