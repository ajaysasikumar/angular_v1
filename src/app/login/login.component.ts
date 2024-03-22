import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl,NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:any;
  userRecods:any[]=[];
  data = {
    email:"",
    password :""
  }

  constructor(private router : Router,private authService:AuthService){

    this.form = new FormGroup(
      {
        username : new FormControl('',[Validators.required,Validators.email]),
        password : new FormControl('',[Validators.required])
      
      }
    )
  }
  onLogin(){
    this.data.email = this.form.value.username;
    this.data.password = this.form.value.password;
    
    this.userRecods= JSON.parse(localStorage.getItem("users")||'{}');

    if(this.userRecods.some((record)=>{
      return record.email == this.data.email && record.password == this.data.password;
    })){
      if(this.data.email =='admin' && this.data.password=='admin'){
        this.router.navigate(['view']);
      }
      else{
        alert("Login Successful");
        this.authService.login(this.data.email, this.data.password);
        console.log("Navigating to studeAuthServicenthome...");
        this.router.navigate(['studenthome']);
        console.log("Navigation done.");
    }}
    else{
      alert("Login Unsuccessful")
      console.log(this.data.email);
      console.log(this.form.value.username);
    }
  }
}
