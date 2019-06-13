import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() errorMessage: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() autofocus: boolean;

  @Output() keyupEvent: EventEmitter<KeyboardEvent> = new EventEmitter();

  @ViewChild('input') inputElement: ElementRef;

  constructor() {
  }

  onKeyup(event: KeyboardEvent) {
    this.keyupEvent.emit(event);
  }

  ngOnInit() {
    if (this.autofocus) {
      this.inputElement.nativeElement.focus();
    }
  }

}
