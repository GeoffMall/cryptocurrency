import { Component, OnInit } from '@angular/core';
import {CryptoApiService} from "../../core/crypto-api.service";
import {CryptonatorTicker} from "../../shared/models/api-cryptonator";

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.scss']
})
export class BitcoinComponent implements OnInit {
  public ticker: CryptonatorTicker;
  public coinBaseInfo: any;

  constructor(private crypto: CryptoApiService) { }

  ngOnInit() {
    this.crypto.getCryptonatorTicker('btc-usd').subscribe(
      (response) => {
        this.ticker = response;
      });
    this.crypto.getCoinBaseInfo('BTC-USD').subscribe(
      (response) => {
        this.coinBaseInfo = response;
      });
  }

}
