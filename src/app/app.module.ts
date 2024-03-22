import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';
import { SharedService } from './shared.service';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { StudentviwComponent } from './studentviw/studentviw.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { EditpopupComponent } from './editpopup/editpopup.component';
import { StudenthomecardsComponent } from './studenthomecards/studenthomecards.component';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ViewdetailspopupComponent } from './viewdetailspopup/viewdetailspopup.component';
import { UsernavComponent } from './usernav/usernav.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ShowuserComponent,
    NavbarComponent,
    HomeComponent,
    StudentviwComponent,
    StudenthomeComponent,
    EditpopupComponent,
    ViewdetailspopupComponent,
    UsernavComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    //provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    StudenthomecardsComponent,
    FormsModule
    
  ],
  providers: [SharedService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
