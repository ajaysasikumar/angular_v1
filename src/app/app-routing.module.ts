import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { HomeComponent } from './home/home.component';
import { StudentviwComponent } from './studentviw/studentviw.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { StudenthomecardsComponent } from './studenthomecards/studenthomecards.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path : '',component:HomeComponent},
  {path : 'view',component:StudentviwComponent,canActivate: [AuthGuard]},

  {path : 'studenthome',component:StudenthomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
