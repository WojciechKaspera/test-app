import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchInputComponent} from './search-input.component';
import {InputModule} from '../shared/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    InputModule
  ],
  declarations: [SearchInputComponent],
  exports: [SearchInputComponent]
})
export class SearchInputModule {
}
