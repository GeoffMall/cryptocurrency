import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CoinData} from '../api-data';
import {Data} from '@angular/router';



@Injectable()
export class CryptoApiService {


  constructor(private http: Http) { }

  public getCoinList(): Observable<CoinData[]> {
    const getCoinListAPI = 'https://www.cryptocompare.com/api/data/coinlist/';
    return this.http.get(getCoinListAPI).map(
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

  public getCoinPrice(symbol: string): Observable<any> {
    let getCoinPriceAPI = 'https://min-api.cryptocompare.com/data/price';
    const ETH = '?fsym=ETH&tsyms=USD';
    const BTC = '?fsym=BTC&tsyms=USD';
    if (symbol === 'ETH') {
      getCoinPriceAPI = getCoinPriceAPI + ETH;
    }
    if (symbol === 'BTC') {
      getCoinPriceAPI = getCoinPriceAPI + BTC;
    }
    return this.http.get(getCoinPriceAPI).map(
      (response) => {
        return response.json();
      });
  }


  /*
  ETH
  ETC
  BTC

   https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR
     {"BTC":0.09159,"USD":220.66,"EUR":194.02}
   https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR&extraParams=your_app_name
   https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=XMR,ETH,ZEC&extraParams=your_app_name
   https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=XMR,REP,ZEC&extraParams=your_app_name
   https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR&e=Coinbase&extraParams=your_app_name
   */

}
