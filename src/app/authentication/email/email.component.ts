import {Component} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {

  emailInputTimeout: number;
  inputErrorMessage: string;
  isEmailValid: boolean;
  emailRegex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$');

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  continue() {
    this.authenticationService.checkEmail().subscribe(
      (doesExist: boolean) => {
        this.router.navigateByUrl('login/password');
      },
      () => {
        this.inputErrorMessage = 'We\'re sorry, but it seems we dont have user with such email in our database.';
      });
  }

  onKeyup(event: KeyboardEvent) {
    const inputValue = event.target['value'];
    this.isEmailValid = this.emailRegex.test(inputValue) && inputValue.length > 2;
    if (event.key === 'Enter' && this.isEmailValid) {
      this.authenticationService.credentials.email = inputValue;
      this.continue();
      return;
    }
    this.inputErrorMessage = '';
    if (this.isEmailValid) {
      clearTimeout(this.emailInputTimeout);
      this.emailInputTimeout = setTimeout(() => {
        if (this.isEmailValid) {
          this.authenticationService.credentials.email = inputValue;
        } else {
          this.inputErrorMessage = 'Incorrect email address format';
        }
      }, 500);
    }
  }

}
