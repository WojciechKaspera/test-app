import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchResult} from '../shared/interfaces';
import {SearchService} from '../search/search.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() video: SearchResult;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private router: Router) {
  }

  logout() {
    this.router.navigateByUrl('login/email');
  }

  goBack() {
    const url = this.searchService.searchQuery ? `/search?query=${this.searchService.searchQuery}` : '/search';
    this.router.navigateByUrl(url);
  }

  ngOnInit() {
    const videoId = this.route.snapshot.params.id;
    if (this.searchService.searchResults) {
      this.video = this.searchService.searchResults.find((searchResult: SearchResult) => searchResult.id === videoId);
    } else {
    }
    this.searchService.searchById(videoId).subscribe(
      (res: any) => this.video = {
        title: res.items[0].snippet.title,
        description: res.items[0].snippet.description,
        thumbnail: res.items[0].snippet.thumbnails.default,
        id: res.items[0].id.videoId
      });
  }

}
