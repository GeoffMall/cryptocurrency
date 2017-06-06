import {Component, Input, OnInit} from '@angular/core';
import {Market} from "../../models/api-cryptonator";

@Component({
  selector: 'app-market-price-volume-chart',
  templateUrl: './market-price-volume-chart.component.html',
  styleUrls: ['./market-price-volume-chart.component.scss']
})
export class MarketPriceVolumeChartComponent implements OnInit {

  // Shared
  @Input() markets: Market[];
  public labels:string[] = [];
  public legend:boolean = true;
  public options:any = { responsive: true };
  public views: any = [
    { value: 'volume', viewValue: 'Volume' },
    { value: 'price', viewValue: 'Price'}
  ];
  public currentMarketGraph: string[];

  // Pie
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';

  // Line
  public lineChartData:Array<any> = [];
  public priceData:number[] = [];
  public lineChartType:string = 'line';
  // public lineChartLabels:Array<any> = [];


  constructor() { }

  ngOnInit() {
    // Get top 5 markets by volume
    this.markets = this.markets.slice(0, 5);

    for(let market of this.markets) {
      let i = this.markets.indexOf(market);
      this.labels.push(market.market);
      this.pieChartData.push(market.volume);
      this.priceData.push(Number(market.price));

    }

    // Line chart data must be in array
    this.lineChartData = [
      { data: this.pieChartData, label: 'Volume'},
      { data: this.priceData, label: 'Price' }
    ];
    this.currentMarketGraph = ['volume'];

  }


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
