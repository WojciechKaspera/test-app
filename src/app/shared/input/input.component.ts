import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() errorMessage: string;
  @Input() placeholder: string;

  @Output() keyupEvent: EventEmitter<KeyboardEvent> = new EventEmitter();

  constructor() {
  }

  onKeyup(event: KeyboardEvent) {
    this.keyupEvent.emit(event);
  }

}
