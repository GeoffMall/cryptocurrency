import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightSearchDirective } from './highlight-search.directive';
import { DataTablePipe } from './data-table.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightSearchDirective,
    DataTablePipe
  ],
  exports: [
    HighlightSearchDirective,
    DataTablePipe
  ]
})
export class SharedModule { }
