import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationStatus: boolean;

  constructor() {
  }

  isAuthenticated() {
    return of(this.authenticationStatus);
  }

}
