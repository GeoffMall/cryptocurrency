import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CoinData} from '../coin-list';
import {Data} from '@angular/router';



@Injectable()
export class CryptoApiService {

  private coinList: string;

  constructor(private http: Http) {
    this.coinList = 'https://www.cryptocompare.com/api/data/coinlist/';
  }

  public getCoinList(): Observable<CoinData[]> {
    return this.http.get(this.coinList).map(
      (response) => {
        let coins = response.json()['Data'];
        let coinList = [];
        for (let coin in coins) {
          if (!coins.hasOwnProperty(coin)) {
            //The current property is not a direct property of p
            continue;
          }
          coinList.push(new CoinData(coins[coin]));
        }
        return coinList;
      });
  }


}
