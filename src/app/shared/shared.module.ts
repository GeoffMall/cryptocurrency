import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightSearchDirective } from './highlight-search.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightSearchDirective,
  ],
  exports: [
    HighlightSearchDirective,
  ]
})
export class SharedModule { }
