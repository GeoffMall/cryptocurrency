import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightSearchDirective } from './highlight-search.directive';
import { D3GraphComponent } from './d3-graph/d3-graph.component';
import {D3Service} from "d3-ng2-service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightSearchDirective,
    D3GraphComponent,
  ],
  exports: [
    HighlightSearchDirective,
    D3GraphComponent
  ],
  providers: [D3Service], // <-- provider registration
})
export class SharedModule { }
