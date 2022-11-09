import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  browserSupport;
  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): boolean {
      if (!this.auth.isAuthenticated()) {
        this.auth.redirectURL = routerStateSnapshot.url;
        if (this.auth.redirectURL === '/auth/login') {
          return true;
        }
        this.router.navigate(['auth/login']);
        return false;
      }
      return true;
    }
}
