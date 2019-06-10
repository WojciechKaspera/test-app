import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationStatus: boolean;
  credentials = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {
  }

  isAuthenticated() {
    return of(this.authenticationStatus);
  }

  checkEmail() {
    return this.http.post('http://localhost:4201/email', {email: this.credentials.email});
  }

}
