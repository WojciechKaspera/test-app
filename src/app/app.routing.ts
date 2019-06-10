import {Route, RouterModule} from '@angular/router';
import {EmailComponent} from './authentication/email/email.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {NgModule} from '@angular/core';
import {AuthGuardService} from './authentication/auth-guard.service';

const routes: Route[] = [
  {path: 'login/email', component: EmailComponent, canActivate: [AuthGuardService]},
  {path: 'login/password', component: EmailComponent, canActivate: [AuthGuardService]},
  {path: 'search', component: EmailComponent, canActivate: [AuthGuardService]},
  {path: 'video/:id', component: EmailComponent, canActivate: [AuthGuardService]},
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

export class AppRoutingModule {}
