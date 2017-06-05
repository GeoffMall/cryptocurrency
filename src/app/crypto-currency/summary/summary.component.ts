import { Component, OnInit } from '@angular/core';
import {CryptoApiService} from "../../core/crypto-api.service";
import {CoinMarketCapTicker} from "../../shared/models/api-data";
import {CryptonatorInfo} from "../../shared/models/api-cryptonator";

@Component({
  selector: 'app-coin-list',
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit {
  title = 'Crypto Currency';
  btcTicker: CryptonatorInfo;
  ethTicker: CryptonatorInfo;
  etcTicker: CryptonatorInfo;

  btcCoinBase = { buy: '', sell: '' };
  ethCoinBase = { buy: '', sell: '' };

  cryptoCompare = { eth: '', btc: ''};

  btcCoinMarketCap: CoinMarketCapTicker;
  ethCoinMarketCap: CoinMarketCapTicker;


  constructor(private crypto: CryptoApiService) { }

  ngOnInit() {
    /*
    this.crypto.getCryptonatorInfo('btc-usd').subscribe(
      (response) => {
        this.btcTicker = response;
      });
    this.crypto.getCryptonatorInfo('eth-usd').subscribe(
      (response) => {
        this.ethTicker = response;
      });
    this.crypto.getCryptonatorInfo('etc-usd').subscribe(
      (response) => {
        this.etcTicker = response;
      });
    this.crypto.getCoinBaseBuy('BTC-USD').subscribe(
      (response) => {
        this.btcCoinBase.buy = response;
      });
    this.crypto.getCoinBaseSell('BTC-USD').subscribe(
      (response) => {
        this.btcCoinBase.sell = response;
      });
    this.crypto.getCoinBaseBuy('ETH-USD').subscribe(
      (response) => {
        this.ethCoinBase.buy = response;
      });
    this.crypto.getCoinBaseSell('ETH-USD').subscribe(
      (response) => {
        this.ethCoinBase.sell = response;
      });
    this.crypto.getCoinPrice('ETH').subscribe(
      (response) => {
        this.cryptoCompare.eth = response;
      });
    this.crypto.getCoinPrice('BTC').subscribe(
      (response) => {
        this.cryptoCompare.btc = response;
      });
      */
    /*
     TODO add in after fixing service
     this.crypto.getCoinMarketCapTicker('bitcoin').subscribe(
      (response) => {
        this.btcCoinMarketCap = response;
      });

    this.crypto.getCoinMarketCapTicker('ethereum').subscribe(
      (response) => {
        this.ethCoinMarketCap = response;
      });
     */

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
