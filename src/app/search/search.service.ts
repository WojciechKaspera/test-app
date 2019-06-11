import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiKey = 'AIzaSyAAXzkAfBkVJ8BLHURcqHfWVqtZZWzlbZw';

  constructor(private http: HttpClient) {
  }

  search(query: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${this.apiKey}`);
  }

  getYoutubeApiKey() {
    return this.http.get('http://localhost:4201/');
  }

}
