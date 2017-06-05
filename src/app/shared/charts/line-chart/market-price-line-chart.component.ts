import {Component, Input, OnInit} from '@angular/core';
import {Market} from "../../models/api-cryptonator";

@Component({
  selector: 'app-market-price-line-chart',
  templateUrl: './market-price-line-chart.component.html',
  styleUrls: ['./market-price-line-chart.component.scss']
})
export class MarketPriceLineChartComponent implements OnInit {
  @Input() markets: Market[];

  public lineChartData:Array<any> = [];
  public priceData:number[] = [];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor() { }

  ngOnInit() {
    for(let market of this.markets) {
      this.lineChartLabels.push(market.market);
      this.priceData.push(Number(market.price));
    }
    this.lineChartData = [
      { data: this.priceData, label: 'Price' }
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
