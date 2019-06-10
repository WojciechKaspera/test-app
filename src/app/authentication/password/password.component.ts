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

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  onKeyup() {
    const inputValue = event.target.value;
    this.authenticationService.credentials.password = inputValue;
  }

  login() {

  }

  ngOnInit() {
    if (!this.authenticationService.credentials.email) {
      this.router.navigateByUrl('login/email');
    }
  }
}
