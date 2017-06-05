export class CryptonatorInfo {
  public base: string;
  public target: string;
  public price: string;
  public volume: string;
  public change: string;
  public markets?: Market[];

  constructor(info: CryptonatorInfo) {
    this.base = info.base;
    this.target = info.base;
    this.price = info.price;
    this.volume = info.volume;
    this.change = info.change;
    this.markets = [];
    if (info.markets) {
      for (let market of info.markets) {
        this.markets.push(new Market(market));
      }
    }
    this.markets.sort(this.compareVolumes);
    this.markets.reverse();

  }

  public trendingUp(): boolean {
    return this.change.substring(0, 1) != '-';
  }

  public compareVolumes(a: Market, b: Market) {
    return a.volume - b.volume;
  }

}

export class Market {
  public market: string;
  public price: number;
  public volume: number;

  constructor(market: Market) {
    this.market = market.market;
    this.price = Number(market.price);
    this.volume = Number(market.volume);
  }
}
