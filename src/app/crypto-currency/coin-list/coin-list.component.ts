import { Component, OnInit } from '@angular/core';
import {CryptoApiService} from "../../core/crypto-api.service";
import {CoinData} from "../../api-data";

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
})
export class CoinListComponent implements OnInit {
  title = 'Crypto Currency';
  coinList: CoinData[] = [];
  search: string = null;

  constructor(private crypto: CryptoApiService) { }

  ngOnInit() {
    this.crypto.getCoinList().subscribe(
      (response) => {
        this.coinList = response;
      }, (error) => {
        console.log(error);
      });
  }
}
