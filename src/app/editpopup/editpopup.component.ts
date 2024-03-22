import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editpopup',
  templateUrl: './editpopup.component.html',
  styleUrls: ['./editpopup.component.css']
})
export class EditpopupComponent {
  editData: { [key: string]: string } = {
    'class': '',
    'email': '',
    'password': '',
    'phone': '',
    'place': '',
    'username': ''
  };
  readonly nonEditableKeys = ['password', 'email'];

  isEditable(key: string): boolean {
    return !this.nonEditableKeys.includes(key);
  }

  constructor(
    public dialogRef: MatDialogRef<EditpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editData = data.editData;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onclickUpdate(){
    
  const usersString = localStorage.getItem('users');
  if (usersString) {
    const users: any[] = JSON.parse(usersString);    
    
    const userIndex = users.findIndex(user => user.email === this.editData['email']);
    if (userIndex !== -1) {
      
        users[userIndex]['username'] = this.editData['username'];
        users[userIndex]['place'] = this.editData['place'];
        users[userIndex]['phone'] = this.editData['phone'];
        users[userIndex]['class'] = this.editData['class'];
        
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}
}
