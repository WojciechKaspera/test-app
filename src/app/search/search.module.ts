import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchService} from './search.service';
import {InputModule} from '../shared/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    InputModule,
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule {
}
