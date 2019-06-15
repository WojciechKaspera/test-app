import {Component, HostListener, OnInit} from '@angular/core';
import {SearchService} from './search.service';
import {SearchResult} from '../shared/interfaces';
import {AuthenticationService} from '../authentication/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery: string;
  searchResults: SearchResult[] = [];
  lazyLoading: boolean;
  dataFetchFailure: boolean;
  loading: boolean;

  constructor(private searchService: SearchService, private authenticationService: AuthenticationService,
              private route: ActivatedRoute, private router: Router) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.searchResults.length && !this.lazyLoading) {
      const documentHeight = document.documentElement.scrollHeight;
      const screenHeight = window.innerHeight;
      const scrollPosition = window.pageYOffset;
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
      this.loading = true;
      this.searchResults = [];
      this.searchService.search(this.searchQuery).subscribe((res: any) => {
          this.loading = false;
          this.router.navigateByUrl(`search?query=${this.searchQuery}`);
          this.searchService.nextPageToken = res.nextPageToken;
          this.searchService.searchResults = this.searchResults = res.items.map((searchResult: any) => {
            return {
              title: searchResult.snippet.title,
              description: searchResult.snippet.description,
              thumbnail: searchResult.snippet.thumbnails.medium,
              id: searchResult.id.videoId
            };
          });
        },
        () => {
          this.loading = false;
          this.dataFetchFailure = true;
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
          thumbnail: searchResult.snippet.thumbnails.medium,
          id: searchResult.id.videoId
        });
      });
      this.searchService.searchResults = this.searchResults;
    });
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (this.route.snapshot.queryParams.query) {
      this.searchQuery = this.route.snapshot.queryParams.query;
      this.search();
    }
  }

}
