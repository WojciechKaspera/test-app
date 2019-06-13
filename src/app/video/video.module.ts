import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video.component';
import {RouterModule} from '@angular/router';
import {VideoUrl} from './video-url.pipe';
import {HeaderModule} from '../shared/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  declarations: [VideoComponent, VideoUrl],
  exports: [VideoComponent]
})
export class VideoModule {
}
