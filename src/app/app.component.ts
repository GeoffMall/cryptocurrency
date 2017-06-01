import {Component, OnInit} from '@angular/core';
import {CryptoApiService} from './core/crypto-api.service';
import {CoinData} from './coin-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Crypto Currency';
  coinList: CoinData[] = [];

  constructor(private crypto: CryptoApiService) {}

  ngOnInit() {
    this.crypto.getCoinList().subscribe(
      (response) => {
        this.coinList = response;
      }, (error) => {
      console.log(error);
    });
  }
}
