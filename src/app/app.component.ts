import { Component } from '@angular/core';


import { SharedService } from './shared.service';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student';

  // firestore: Firestore = inject(Firestore);
  // constructor(private service:SharedService){}

  // marks:any=[];
  
  
}
