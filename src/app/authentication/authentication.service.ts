import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationStatus: boolean;
  credentials = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  isAuthenticated() {
    this.authenticationStatus = this.loadTokenFromLocalStorage();
    return of(this.authenticationStatus);
  }

  saveTokenToLocalStorage() {
    localStorage.setItem('token', 'Fabulous token');
  }

  loadTokenFromLocalStorage() {
    return localStorage.getItem('token') === 'Fabulous token';
  }

  removeTokenFromLocalStorage() {
    localStorage.removeItem('token');
  }

  checkEmail() {
    return this.http.post('http://localhost:4201/email', {email: this.credentials.email});
  }

  login() {
    return this.http.post('http://localhost:4201/login', {...this.credentials});
  }

  logout() {
    this.removeTokenFromLocalStorage();
    this.authenticationStatus = false;
    this.router.navigateByUrl('login/email');
  }

}
