import {Component, Input, OnInit} from '@angular/core';
import {CoinBaseInfo} from "../../../models/api-coinbase";

@Component({
  selector: 'app-sell-spot-buy-line-chart',
  templateUrl: './sell-spot-buy-line-chart.component.html',
  styleUrls: ['./sell-spot-buy-line-chart.component.scss']
})
export class SellSpotBuyLineChartComponent implements OnInit {
  @Input() info: CoinBaseInfo;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Sell', 'Spot', 'Buy'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[];
  public coinbaseData:number[] = [];

  constructor() { }

  ngOnInit() {
    this.coinbaseData.push(Number(this.info.sell));
    this.coinbaseData.push(Number(this.info.spot));
    this.coinbaseData.push(Number(this.info.buy));
    this.barChartData = [
      { data: this.coinbaseData, label: 'Coinbase'}
    ];
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
