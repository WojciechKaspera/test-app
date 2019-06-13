import {Route, RouterModule} from '@angular/router';
import {EmailComponent} from './authentication/email/email.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NgModule} from '@angular/core';
import {AuthGuardService} from './authentication/auth-guard.service';
import {PasswordComponent} from './authentication/password/password.component';
import {SearchComponent} from './search/search.component';
import {VideoComponent} from './video/video.component';

const routes: Route[] = [
  {path: 'login/email', component: EmailComponent, canActivate: [AuthGuardService]},
  {path: 'login/password', component: PasswordComponent, canActivate: [AuthGuardService]},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuardService]},
  {path: 'video/:id', component: VideoComponent, canActivate: [AuthGuardService]},
  {path: 'not-found', component: NotFoundComponent},
  {path: '', pathMatch: 'full', redirectTo: 'search'},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
