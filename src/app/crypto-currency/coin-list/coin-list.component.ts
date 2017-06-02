import { Component, OnInit } from '@angular/core';
import {CryptoApiService} from "../../core/crypto-api.service";
import {CoinData} from "../../api-data";

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
})
export class CoinListComponent implements OnInit {
  title = 'Crypto Currency';
  coinList: CoinData[] = [];
  search: string;

  constructor(private crypto: CryptoApiService) { }

  ngOnInit() {
    this.crypto.getCoinList().subscribe(
      (response) => {
        this.coinList = response;
      }, (error) => {
        console.log(error);
      });
  }

  showListItem(searchString: string, ...inputs: string[]): boolean {
    if (searchString == undefined || searchString == '') {
      return true;
    }
    let aggregateInput = '';
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] != null && inputs[i] != undefined) {
        aggregateInput += inputs[i] + " ";
      }
    }
    return aggregateInput.toLowerCase().indexOf(searchString.toLowerCase()) != -1;
  }

}
