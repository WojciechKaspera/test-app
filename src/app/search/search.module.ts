import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchService} from './search.service';
import {InputModule} from '../shared/input/input.module';
import {SearchResultComponent} from './search-result/search-result.component';
import {ButtonModule} from '../shared/button/button.module';
import {HeaderModule} from '../shared/header/header.module';
import {LoaderModule} from '../shared/loader/loader.module';
import {SearchInputModule} from '../search-input/search-input.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    HeaderModule,
    LoaderModule,
    SearchInputModule
  ],
  declarations: [SearchComponent, SearchResultComponent],
  exports: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule {
}
