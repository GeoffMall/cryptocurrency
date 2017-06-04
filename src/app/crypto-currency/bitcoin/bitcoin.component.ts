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

  constructor(private crypto: CryptoApiService) { }

  ngOnInit() {
    this.crypto.getCryptonatorTicker('btc-usd').subscribe(
      (response) => {
        this.ticker = response;
      });

  }

}
