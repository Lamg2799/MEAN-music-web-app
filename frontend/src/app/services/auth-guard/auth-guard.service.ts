import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate(){
    if(this.authService.isAuthenticated()){
      return true;
    }
    this.route.navigate(['log-in']);
    return false;
  }
}	