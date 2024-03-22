import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private router:Router){

  }
  regBtn(){

    this.router.navigate(['/register']);

  }
  logBtn(){
    this.router.navigate(['/login']);
  }

  showStudents(){
    this.router.navigate(['/showUser']);
  }
}
