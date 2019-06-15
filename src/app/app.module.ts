import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {AppRoutingModule} from './app.routing';
import {AuthenticationModule} from './authentication/authentication.module';
import {SearchModule} from './search/search.module';
import {VideoModule} from './video/video.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SearchModule,
    VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
