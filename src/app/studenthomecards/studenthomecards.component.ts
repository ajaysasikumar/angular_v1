
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';

import { ViewdetailspopupComponent } from '../viewdetailspopup/viewdetailspopup.component';

@Component({
  selector: 'app-studenthomecards',
  templateUrl: './studenthomecards.component.html',
  styleUrls: ['./studenthomecards.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class StudenthomecardsComponent {

  constructor(private dialog: MatDialog,private authService: AuthService){}

  
  regDetails = localStorage.getItem("users");
  



  viewCard(): void{
    const currentUser = this.authService.getCurrentUser();
    let regDetailsData: any; // Corrected the declaration
    const isData = localStorage.getItem("users");
    if(isData != null){
      const localData = JSON.parse(isData);
      for(let i = 0; i < localData.length; i++){
          if(localData[i].email == currentUser.username){
            regDetailsData = localData[i];
            console.log(regDetailsData);
            break;
          }
        }
      }
    
    console.log('working');
    console.log(regDetailsData);
    console.log(this.authService.getCurrentUser());
    
    const dialogRef = this.dialog.open(ViewdetailspopupComponent, {
      width: '600px',
      height: '300px' ,
      
      data: { regDetailsData : regDetailsData }
    });
  }
}
