import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchResult} from '../shared/interfaces';
import {SearchService} from '../search/search.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  searchQuery: string;
  previousSearchQuery: string;
  videoWidth: number;
  videoHeight: number;
  video: SearchResult;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private router: Router) {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.determineVideoDimensions();
  }

  logout() {
    this.router.navigateByUrl('login/email');
  }

  onKeyup(event: KeyboardEvent) {
    this.searchQuery = event.target['value'];
    if (event.key === 'Enter') {
      this.search();
    }
  }

  search() {
    if (this.searchQuery) {
      this.router.navigateByUrl(`search?query=${this.searchQuery}`);
    }
  }

  goBack() {
    const url = `/search?query=${this.previousSearchQuery}`;
    this.router.navigateByUrl(url);
  }

  determineVideoDimensions() {
    this.videoWidth = window.innerWidth < 576 ? window.innerWidth - 80 : 540;
    this.videoHeight = window.innerWidth < 576 ? window.innerWidth * 2 / 3 : 360;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.determineVideoDimensions();
    this.previousSearchQuery = this.searchService.searchQuery;
    const videoId = this.route.snapshot.params.id;
    this.searchService.searchById(videoId).subscribe(
      (res: any) => {
        this.video = {
          title: res.items[0].snippet.title,
          description: res.items[0].snippet.description,
          thumbnail: res.items[0].snippet.thumbnails.medium,
          id: res.items[0].id,
          tags: res.items[0].snippet.tags
        };
      });
  }

}
