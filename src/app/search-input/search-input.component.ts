import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() keyUpEvent: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output() searchEvent: EventEmitter<null> = new EventEmitter();

  constructor() {
  }

  search() {
    this.searchEvent.emit();
  }

  onKeyup(event: KeyboardEvent) {
    this.keyUpEvent.emit(event);
  }

  ngOnInit() {
  }

}
