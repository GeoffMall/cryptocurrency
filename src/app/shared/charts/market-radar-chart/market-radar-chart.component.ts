import {Component, Input, OnInit} from '@angular/core';
import {Market} from "../../models/api-cryptonator";

@Component({
  selector: 'app-market-radar-chart',
  templateUrl: './market-radar-chart.component.html',
  styleUrls: ['./market-radar-chart.component.scss']
})
export class MarketRadarChartComponent implements OnInit {
  @Input() markets: Market[];

  // Radar
  public radarChartLabels:string[] = [];
  public radarChartData:any;
  public volumeData:number[] = [];
  public priceData:number[] = [];
  public radarChartType:string = 'radar';

  constructor() { }

  ngOnInit() {
    for(let market of this.markets) {
      this.radarChartLabels.push(market.market);
      this.volumeData.push(Number(market.volume));
      this.priceData.push(Number(market.price));
      }
    this.radarChartData = [
      { data: this.priceData, label: 'Price' },
      { data: this.volumeData, label: 'Volume' },
    ];
  }


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
