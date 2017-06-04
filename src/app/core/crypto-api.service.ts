import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CoinMarketCapTicker } from '../shared/models/api-data';
import {CryptonatorTicker} from "../shared/models/api-cryptonator";

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

  /**
   * https://www.cryptonator.com/api
   * @param name
   * @param full
   * @return {Observable<CryptonatorTicker>}
   */
  public getCryptonatorTicker(name: string, full?: boolean): Observable<CryptonatorTicker> {
    let API = 'https://api.cryptonator.com/api/full/'+ name;
    return this.http.get(API).map(
      (response) => {
        let ticker = response.json()['ticker'];
        return new CryptonatorTicker(ticker);
      });
  }

  public getCoinBaseInfo(name: string): Observable<any> {
    let API = 'https://api.coinbase.com/v2/prices/' + name;
    let SpotAPI = API + '/spot';
    let BuyAPI = API + '/buy';
    let SellAPI = API + '/sell';

    let buy = this.http.get(BuyAPI);
    let sell = this.http.get(SellAPI);
    let spot = this.http.get(SpotAPI);

    return Observable.forkJoin([ buy, sell, spot ])
      .map(results => {
        let buy = results[0].json()['data']['amount'];
        let sell = results[1].json()['data']['amount'];
        let spot = results[2].json()['data']['amount'];
        return {'buy': buy, 'sell': sell, 'spot': spot};
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
