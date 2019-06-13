import {Component, HostListener} from '@angular/core';
import {SearchService} from './search.service';
import {SearchResult} from '../shared/interfaces';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchQuery: string;
  searchResults: SearchResult[] = [];
  lazyLoading: boolean;

  constructor(private searchService: SearchService, private authenticationService: AuthenticationService) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (!this.lazyLoading) {
      const documentHeight = document.documentElement.scrollHeight;
      const screenHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      if (documentHeight - scrollPosition < (1.5 * screenHeight)) {
        this.lazyLoading = true;
        this.lazyLoadSearchResults();
      }
    }
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
        this.searchService.nextPageToken = res.nextPageToken;
        this.searchService.searchResults = this.searchResults = res.items.map((searchResult: any) => {
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

  lazyLoadSearchResults() {
    this.searchService.search(this.searchQuery).subscribe((res: any) => {
      this.lazyLoading = false;
      this.searchService.nextPageToken = res.nextPageToken;
      res.items.map((searchResult: any) => {
        this.searchResults.push({
          title: searchResult.snippet.title,
          description: searchResult.snippet.description,
          thumbnail: searchResult.snippet.thumbnails.default,
          id: searchResult.id.videoId
        });
      });
      this.searchService.searchResults = this.searchResults;
    });
  }

  logout() {
    this.authenticationService.logout();
  }

}
