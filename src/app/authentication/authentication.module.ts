import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmailComponent} from './email/email.component';
import {PasswordComponent} from './password/password.component';
import {AuthenticationService} from './authentication.service';
import {AuthGuardService} from './auth-guard.service';
import {InputModule} from '../shared/input/input.module';
import {ButtonModule} from '../shared/button/button.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    HttpClientModule
  ],
  declarations: [EmailComponent, PasswordComponent],
  exports: [EmailComponent, PasswordComponent],
  providers: [AuthenticationService, AuthGuardService]
})
export class AuthenticationModule {
}
