export class CoinData {
  public Algorithm: string;
  public CoinName: string;
  public FullName: string;
  public FullyPremined: string;
  public Id: string;
  public ImageUrl: string;
  public Name: string;
  public PreMinedValue: string;
  public ProofType: string;
  public SortOrder: string;
  public TotalCoinSupply: number;
  public TotalCoinsFreeFloat: string;
  public Url: string;

  constructor()
  constructor(coinData: CoinData)
  constructor(coinData?: CoinData) {
    this.Algorithm = coinData.Algorithm;
    this.CoinName = coinData.CoinName;
    this.FullName = coinData.FullName;
    this.FullyPremined = coinData.FullyPremined;
    this.Id = coinData.Id;
    this.ImageUrl = coinData.ImageUrl;
    this.Name = coinData.Name;
    this.PreMinedValue = coinData.PreMinedValue;
    this.ProofType = coinData.ProofType;
    this.SortOrder = coinData.SortOrder;
    this.TotalCoinSupply = coinData.TotalCoinSupply;
    this.TotalCoinsFreeFloat = coinData.TotalCoinsFreeFloat;
    this.Url = coinData.Url;
  }
}

export class CoinMarketCapTicker {
  public id: string;
  public name: string;
  public symbol: string;
  public rank: string;
  public price_usd: string;
  public price_btc: string;
  // public 24h_volume_usd: string;
  public market_cap_usd: string;
  public available_supply: string;
  public total_supply: string;
  public percent_change_1h: string;
  public percent_change_24h: string;
  public percent_change_7d: string;
  public last_updated: string;
}
