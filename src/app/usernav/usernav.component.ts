import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent {

  constructor(private auth:AuthService){}

  logOut(){
    this.auth.logout();

  }
}
