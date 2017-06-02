import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightSearchDirective } from './highlight-search.directive';
import { D3VoronoiSpiralsComponent } from './d3/voronoi-spirals.component';
import {D3Service} from "d3-ng2-service";
import { D3BrushZoomComponent } from './d3/brush-zoom.component';
import { D3DragZoomComponent } from './d3/drag-zoom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightSearchDirective,
    D3VoronoiSpiralsComponent,
    D3BrushZoomComponent,
    D3DragZoomComponent,
  ],
  exports: [
    HighlightSearchDirective,
    D3VoronoiSpiralsComponent,
    D3BrushZoomComponent,
    D3DragZoomComponent
  ],
  providers: [D3Service], // <-- provider registration
})
export class SharedModule { }
