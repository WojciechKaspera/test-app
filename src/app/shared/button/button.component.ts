import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() label: string;
  @Input() isDisabled: string;

  @Output() clickEvent: EventEmitter<null> = new EventEmitter();

  constructor() {
  }

  onClick() {
    this.clickEvent.emit();
  }

}
