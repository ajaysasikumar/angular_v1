import { Injectable, inject } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore) { }

  getMarks(){
   
    let marksData = collection(this.fs,'marks');
  }
}
