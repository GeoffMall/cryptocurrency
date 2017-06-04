export class CryptonatorTicker {
  public base: string;
  public target: string;
  public price: string;
  public volume: string;
  public change: string;
  public markets: Market[];

  constructor(ticker: CryptonatorTicker) {
    this.base = ticker.base;
    this.target = ticker.base;
    this.price = ticker.price;
    this.volume = ticker.volume;
    this.change = ticker.change;
    if (ticker.markets) {
      this.markets = ticker.markets;
    }
  }

  public trendingUp(): boolean {
    return this.change.substring(0, 1) != '-';
  }

}

export class Market {
  public market: string;
  public price: string;
  public volume: string;
}
/*

{"ticker":
  {"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},
  "timestamp":1399490941,"success":true,"error":""}

{"ticker":
  {"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596",
  "markets":[
  {"market":"bitfinex","price":"447.5000000000","volume":"10559.5293639000"},
  {"market":"bitstamp","price":"448.5400000000","volume":"11628.2880079300"},
  {"market":"btce","price":"432.8900000000","volume":"8561.0563600000"},
  {"market":"cryptotrade","price":"436.9999989900","volume":"0.3640623100"},
  {"market":"exmoney","price":"428.0000000000","volume":"7.9020328400"},
  {"market":"hitbtc","price":"442.6200000000","volume":"750.5900000000"},
  {"market":"justcoin","price":"453.4920000000","volume":"10.2583700000"},
  {"market":"kraken","price":"452.7042200000","volume":"17.7767076800"},
  {"market":"therocktrading","price":"440.0000000000","volume":"178.9300000000"},
  {"market":"vaultofsatoshi","price":"450.6428600000","volume":"5.3209840100"},
  {"market":"vircurex","price":"460.0000000000","volume":"0.1335082600"}]},
  "timestamp":1399490941,
  "success":true,
  "error":""}

*/
