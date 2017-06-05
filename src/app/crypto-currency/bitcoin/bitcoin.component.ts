import { Component, OnInit } from '@angular/core';
import {CryptoApiService} from "../../core/crypto-api.service";
import {CryptonatorInfo} from "../../shared/models/api-cryptonator";
// import {BitstampInfo} from "../../shared/models/api-bitstamp";
import {CoinBaseInfo} from "../../shared/models/api-coinbase";

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.scss']
})
export class BitcoinComponent implements OnInit {
  public cryptonatorInfo: CryptonatorInfo;
  public coinBaseInfo: CoinBaseInfo;
  // public bitstampInfo: BitstampInfo;
  public currentMarketGraph: string[];



  constructor(private crypto: CryptoApiService) { }

  ngOnInit() {
    this.crypto.getCryptonatorInfo('btc-usd').subscribe(
      (response) => {
        this.cryptonatorInfo = response;
      });

    this.crypto.getCoinBaseInfo('BTC-USD').subscribe(
      (response) => {
        this.coinBaseInfo = response;
      });
    this.currentMarketGraph = ['volume'];

    /*
     this.crypto.getBitstampInfo('btcusd').subscribe(
      (response) => {
        this.bitstampInfo = response;
      });
    */
  }

}
