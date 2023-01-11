import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
// import {authser}

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent {

  constructor(private authService: AuthService, private router: Router) { }

  
  title = 'signupform';
  faemail = faEnvelope
  fauser = faUser;
  fakey = faUnlockKeyhole;
  genders = ['Male','Female','Not specified']



  signupform = new FormGroup({
    username : new FormControl('',Validators.required),
    email : new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
    gender: new FormControl('')
  })

  username: string = "";
  password: string = "";

  onClickSubmit(data: any) {
    this.username = data.username;
    this.password = data.password;

    console.log("userName: " + this.username);
    console.log("password: " + this.password);

    // this.authService.login(this.username, this.password).subscribe(data => {
    //   console.log("Login Success: " + data);

    //   if (data) this.router.navigate(['/home']);

    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 1000);
    // });
  }
}
