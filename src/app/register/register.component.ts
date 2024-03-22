import { Component } from '@angular/core';
import { ReactiveFormsModule,Validators,FormBuilder } from '@angular/forms';
import { FormControl, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  upform:any;

  userData:any[]=[];

  newdata:any[]=[];

 
  contactRegex : string = "[789][0-9]{9}";

  
  data={ 
      id:"",
      username :"",
      password :"",
      email :"",
      class :"",
      place :"",
      phone :""};

 

  constructor( fb: FormBuilder,private router : Router){

   this.upform= fb.group({

      
      username : ['',[Validators.required,Validators.minLength(5)]],
      password : ['',[Validators.required]],
      email : ['',[Validators.required,
                    Validators.minLength(5)]],
      class : ['',[Validators.required]],
      place : ['',[Validators.required]],
      phone : ['',[Validators.required,Validators.pattern(this.contactRegex)]]

    })
  }

  onSubmit(){

    
    
    console.log(this.userData);
    console.log(this.data)

    this.userData = JSON.parse(localStorage.getItem('users')|| ('{}'));
    if(this.userData.some((v)=>{
      return v.email == this.data.email;})){
          alert("duplicate Data")
    }
    else{
     
      this.userData.push(this.upform.value);
      
      localStorage.setItem("users",JSON.stringify(this.userData))
      alert("Successfully  Registered. login to continue")
        this.router.navigate(['login']);
  }
}


}
 