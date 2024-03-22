import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditpopupComponent } from '../editpopup/editpopup.component';
@Component({
  selector: 'app-studentviw',
  templateUrl: './studentviw.component.html',
  styleUrls: ['./studentviw.component.css']
})
export class StudentviwComponent {
  name: string = '';
  animal: string = '';

  dataArray = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
  ];

  userData:any[]=[];
  data ={ 
          username :"",
          password :"",
          email :"",
          class :"",
          place :"",
          phone :""
        };
  
  constructor(private dialog: MatDialog){
    this.userData = JSON.parse(localStorage.getItem('users')||'{}');
    this.userData = this.userData.filter((a:any) => a.email !='admin');
  }
  
  ondel(emaildata:any){
    const isData = localStorage.getItem("users");
    if(isData != null){
      const localData = JSON.parse(isData);
      for(let i = 0; i < localData.length; i++){
          if(localData[i].email == emaildata ){
            localData.splice(0,1);

          }
      }
      localStorage.setItem("users",JSON.stringify(localData));
     
      
    }
   

  }
  
  openDialog(rowId:string): void {
    console.log(rowId);

    let edit_data: any; // Corrected the declaration
    const isData = localStorage.getItem("users");
    if(isData != null){
      const localData = JSON.parse(isData);
      for(let i = 0; i < localData.length; i++){
          if(localData[i].email == rowId ){
            edit_data = localData[i];
            break;
          }
        }
      }

    console.log(edit_data);

    const dialogRef = this.dialog.open(EditpopupComponent, {
      width: '650px',
      height: '800px',
      data : {editData : edit_data},
      
      
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.animal = result;
      }
    });
  }
}
