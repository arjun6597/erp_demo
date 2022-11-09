import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public redirectURL: any = '';
  enableAllTheme = new Subject<any>();

  constructor(
    private router: Router
  ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('x-auth-token');
    if (!token) {
      return false;
    }
    return true;
  }

  resolve(): void {
    if (this.isAuthenticated()) {
    //  this.router.navigate(['/dashboard'])
    }
  }

  logout() {
    localStorage.removeItem('x-auth-token');
    localStorage.removeItem('adminId');
    this.router.navigate(['auth/login']);
  }

  changePassword() {

  }

  public accessGivenToApp(status) {
    this.enableAllTheme.next(status);
  }

  public isLoggedIn() {
    return localStorage.getItem('x-auth-token') !== null;
  }
}
