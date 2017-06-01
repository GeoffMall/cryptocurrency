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
  public TotalCoinSupply: string;
  public TotalCoinsFreeFloat: string;
  public Url: string;

  constructor()
  constructor(coindata: CoinData)
  constructor(coindata?: CoinData) {
    this.Algorithm = coindata.Algorithm;
    this.CoinName = coindata.CoinName;
    this.FullName = coindata.FullName;
    this.FullyPremined = coindata.FullyPremined;
    this.Id = coindata.Id;
    this.ImageUrl = coindata.ImageUrl;
    this.Name = coindata.Name;
    this.PreMinedValue = coindata.PreMinedValue;
    this.ProofType = coindata.ProofType;
    this.SortOrder = coindata.SortOrder;
    this.TotalCoinSupply = coindata.TotalCoinSupply;
    this.TotalCoinsFreeFloat = coindata.TotalCoinsFreeFloat;
    this.Url = coindata.Url;
  }
}

