import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightSearchDirective } from './highlight-search.directive';
import { MarketPriceLineChartComponent } from './charts/line-chart/market-price-line-chart.component';
import {ChartsModule} from "ng2-charts";
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { MarketRadarChartComponent } from './charts/market-radar-chart/market-radar-chart.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SellSpotBuyLineChartComponent } from './charts/bar-chart/sell-spot-buy-line-chart/sell-spot-buy-line-chart.component';
import { MarketPriceVolumeChartComponent } from './charts/market-price-volume-chart/market-price-volume-chart.component';
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    HighlightSearchDirective,
    MarketPriceLineChartComponent,
    PieChartComponent,
    MarketRadarChartComponent,
    SellSpotBuyLineChartComponent,
    MarketPriceVolumeChartComponent,
    ClockComponent,
  ],
  exports: [
    HighlightSearchDirective,
    MarketPriceLineChartComponent,
    PieChartComponent,
    MarketRadarChartComponent,
    SellSpotBuyLineChartComponent,
    MarketPriceVolumeChartComponent,
    ClockComponent,
  ],
})
export class SharedModule { }
