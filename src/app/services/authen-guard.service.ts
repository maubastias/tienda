import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuardService {

  constructor( private authService : AuthenticationService) { }

    canActivate(): Boolean{
    return this.authService.isAuthenticated();

  }



}
