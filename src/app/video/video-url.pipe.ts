import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'videoUrl'})
export class VideoUrl implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(videoUrl) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

}
