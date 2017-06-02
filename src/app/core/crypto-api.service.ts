import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CoinMarketCapTicker, CoinTicker, Ticker} from '../api-data';

@Injectable()
export class CryptoApiService {

  constructor(private http: Http) { }


  public getCoinPrice(symbol: string): Observable<any> {
    let API = 'https://min-api.cryptocompare.com/data/price';
    API = API + '?fsym=' + symbol + '&tsyms=USD';
    return this.http.get(API).map(
      (response) => {
        return response.json()['USD'];
      });
  }

  public getCoinTicker(coin: string): Observable<Ticker> {
    let API = 'https://api.cryptonator.com/api/ticker/';
    API = API + coin;
    return this.http.get(API).map(
      (response) => {
        let ticker = response.json() as CoinTicker;
        return new CoinTicker(ticker).ticker;
      });
  }

  public getCoinBaseBuy(coin: string): Observable<any> {
    let API = 'https://api.coinbase.com/v2/prices/';
    API = API + coin + '/buy';
    return this.http.get(API).map(
      (response) => {
        return response.json()['data']['amount'];
      });
  }

  public getCoinBaseSell(coin: string): Observable<any> {
    let API = 'https://api.coinbase.com/v2/prices/' + coin + '/sell';
    return this.http.get(API).map(
      (response) => {
        return response.json()['data']['amount'];
      });
  }

  public getCoinMarketCapTicker(coin: string): Observable<any> {
    let API = 'http://api.coinmarketcap.com/v1/ticker/';
    API = API + coin;
    const headers = new Headers();
    /* Attempted try at CORS for this api
     headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    */
    return this.http.get(API, headers).map(
      (response) => {
        return response.json() as CoinMarketCapTicker;
      }).catch((err) => {
        // TODO fix CORS issue
        // debugger;
        return err.json();
    });
  }


}
