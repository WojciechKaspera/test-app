import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SearchResult} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiKey = 'AIzaSyAAXzkAfBkVJ8BLHURcqHfWVqtZZWzlbZw';
  searchResults: SearchResult[];
  nextPageToken: string;
  searchQuery: string;

  constructor(private http: HttpClient) {
  }

  search(query: string) {
    this.searchQuery = query;
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${this.apiKey}${this.nextPageToken ? '&pageToken=' + this.nextPageToken : ''}`);
  }

  searchById(videoId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${this.apiKey}`);
  }

}
