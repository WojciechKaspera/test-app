import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  inputErrorMessage: string;
  isInputEmpty: boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  onKeyup(event) {
    const inputValue = event.target.value;
    this.isInputEmpty = inputValue.length > 0;
    this.authenticationService.credentials.password = inputValue;
    if (event.key === 'Enter') {
      this.login();
      return;
    }
  }

  login() {
    this.authenticationService.login().subscribe(
      () => {
        this.authenticationService.authenticationStatus = true;
        this.authenticationService.saveTokenToLocalStorage();
        this.router.navigateByUrl('search');
      },
      (err) => {
        this.inputErrorMessage = 'Incorrect password!';
      }
    );
  }

  ngOnInit() {
    if (!this.authenticationService.credentials.email) {
      this.router.navigateByUrl('login/email');
    }
  }
}
