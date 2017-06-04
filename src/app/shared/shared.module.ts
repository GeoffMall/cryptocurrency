import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightSearchDirective } from './highlight-search.directive';
import { LineChartComponent } from './line-chart/line-chart.component';
import {ChartsModule} from "ng2-charts";
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MarketRadarChartComponent } from './market-radar-chart/market-radar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
  ],
  declarations: [
    HighlightSearchDirective,
    LineChartComponent,
    PieChartComponent,
    MarketRadarChartComponent,
  ],
  exports: [
    HighlightSearchDirective,
    LineChartComponent,
    PieChartComponent,
    MarketRadarChartComponent,
  ],
})
export class SharedModule { }
