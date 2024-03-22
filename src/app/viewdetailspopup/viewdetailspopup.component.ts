import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-viewdetailspopup',
  templateUrl: './viewdetailspopup.component.html',
  styleUrls: ['./viewdetailspopup.component.css']
})
export class ViewdetailspopupComponent {
  
  detailsData:any;
  constructor(
    public dialogRef: MatDialogRef<ViewdetailspopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.detailsData = data.regDetailsData;
    
  }

}
