import {Component, OnInit} from '@angular/core';
import {SearchService} from './search.service';
import {SearchResult} from '../shared/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery: string;
  searchResults: SearchResult[];

  constructor(private searchService: SearchService) {
  }

  onKeyup(event: KeyboardEvent) {
    this.searchQuery = event.target['value'];
    if (event.key === 'Enter') {
      this.search();
    }
  }

  search() {
    if (this.searchQuery) {
      this.searchService.search(this.searchQuery).subscribe((res: any) => {
        this.searchResults = this.searchService.searchResults = res.items.map((searchResult: any) => {
          return {
            title: searchResult.snippet.title,
            description: searchResult.snippet.description,
            thumbnail: searchResult.snippet.thumbnails.default,
            id: searchResult.id.videoId
          };
        });
      });
    }
  }

  ngOnInit() {
  }

}
