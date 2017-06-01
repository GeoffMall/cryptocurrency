import {Component, OnInit} from '@angular/core';
import {CryptoApiService} from './core/crypto-api.service';
import {CoinData} from './api-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Crypto Currency';

  constructor() {}

  ngOnInit() { }
}
