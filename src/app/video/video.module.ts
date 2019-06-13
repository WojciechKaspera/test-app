import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video.component';
import {RouterModule} from '@angular/router';
import {VideoUrl} from './video-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [VideoComponent, VideoUrl],
  exports: [VideoComponent]
})
export class VideoModule {
}
