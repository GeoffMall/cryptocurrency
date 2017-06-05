import { Component, OnInit } from '@angular/core';
import {BitstampInfo} from "../../shared/models/api-bitstamp";
import {CoinBaseInfo} from "../../shared/models/api-coinbase";
import {CryptonatorInfo} from "../../shared/models/api-cryptonator";
import {CryptoApiService} from "../../core/crypto-api.service";

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.scss']
})
export class EthereumComponent implements OnInit {
  public cryptonatorInfo: CryptonatorInfo;
  public coinBaseInfo: CoinBaseInfo;
  public bitstampInfo: BitstampInfo;
  public currentMarketGraph: string[];
  public graphOptions: any = [
    { value: 'volume', viewValue: 'Volume' },
    { value: 'price', viewValue: 'Price'}
  ];


  constructor(private crypto: CryptoApiService) { }

  ngOnInit() {
    this.crypto.getCryptonatorInfo('eth-usd').subscribe(
      (response) => {
        this.cryptonatorInfo = response;
      });

    this.crypto.getCoinBaseInfo('ETH-USD').subscribe(
      (response) => {
        this.coinBaseInfo = response;
      });
    this.currentMarketGraph = ['volume'];

  }

}
