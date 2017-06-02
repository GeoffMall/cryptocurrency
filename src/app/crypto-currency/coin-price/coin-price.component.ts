import { Component, OnInit } from '@angular/core';
import {CryptoApiService} from "../../core/crypto-api.service";

@Component({
  selector: 'app-coin-price',
  templateUrl: './coin-price.component.html',
})
export class CoinPriceComponent implements OnInit {
  eth: any;
  btc: any;

  constructor(private crypto: CryptoApiService) { }

  ngOnInit() {
    this.crypto.getCoinPrice('ETH').subscribe(
      (response) => {
        this.eth = response;
      });
    this.crypto.getCoinPrice('BTC').subscribe(
      (response) => {
        this.btc = response;
      });

  }



}
