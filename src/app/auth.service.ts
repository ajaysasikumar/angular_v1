import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string) {
    
    localStorage.setItem('currentUser', JSON.stringify({ username, password }));
  }

  logout() {
    
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    
    const currentUserString = localStorage.getItem('currentUser');
  
    
    return currentUserString ? JSON.parse(currentUserString) : null;
  }

  isLoggedIn() {
    // Check if user is logged in
    return !!localStorage.getItem('currentUser');
  }
}
