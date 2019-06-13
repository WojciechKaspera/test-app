import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchResult} from '../shared/interfaces';
import {SearchService} from '../search/search.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() video: SearchResult;

  constructor(private route: ActivatedRoute, private searchService: SearchService) {
  }

  ngOnInit() {
    const videoId = this.route.snapshot.params.id;
    this.video = this.searchService.searchResults.find((searchResult: SearchResult) => searchResult.id === videoId);
  }

}
