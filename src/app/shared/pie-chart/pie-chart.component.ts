import {Component, Input, OnInit} from '@angular/core';
import {Market} from "../models/api-cryptonator";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() markets: Market[];

  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';

  constructor() { }

  ngOnInit() {
    for(let market of this.markets) {
      this.pieChartLabels.push(market.market);
      this.pieChartData.push(Number(market.volume));
    }
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
