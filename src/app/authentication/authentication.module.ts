import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmailComponent} from './email/email.component';
import {PasswordComponent} from './password/password.component';
import {AuthenticationService} from './authentication.service';
import {AuthGuardService} from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailComponent, PasswordComponent],
  exports: [EmailComponent, PasswordComponent],
  providers: [AuthenticationService, AuthGuardService]
})
export class AuthenticationModule {
}
