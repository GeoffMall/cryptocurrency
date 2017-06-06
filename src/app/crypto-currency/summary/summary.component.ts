import { Component, OnInit } from '@angular/core';
import {CryptoApiService} from "../../core/crypto-api.service";
import {CoinMarketCapTicker} from "../../shared/models/api-data";
import {CryptonatorInfo} from "../../shared/models/api-cryptonator";

@Component({
  selector: 'app-coin-list',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  btcInfo: CryptonatorInfo;
  ethInfo: CryptonatorInfo;


  constructor(private crypto: CryptoApiService) { }

  ngOnInit() {
    this.crypto.getCryptonatorInfo('btc-usd').subscribe(
      (response) => {
        this.btcInfo = response;
      });
    this.crypto.getCryptonatorInfo('eth-usd').subscribe(
      (response) => {
        this.ethInfo = response;
      });

  }

  static showListItem(searchString: string, ...inputs: string[]): boolean {
    if (searchString == undefined || searchString == '') {
      return true;
    }
    let aggregateInput = '';
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] != null && inputs[i] != undefined) {
        aggregateInput += inputs[i] + " ";
      }
    }
    return aggregateInput.toLowerCase().indexOf(searchString.toLowerCase()) != -1;
  }



}
