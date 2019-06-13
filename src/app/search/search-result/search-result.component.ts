import {Component, Input, OnInit} from '@angular/core';
import {SearchResult} from '../../shared/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() data: SearchResult;

  constructor(private router: Router) { }

  showVideo() {
    this.router.navigateByUrl(`video/${this.data.id}`);
  }

  ngOnInit() {
  }

}
