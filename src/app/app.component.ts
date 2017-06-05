import {Component, OnInit} from '@angular/core';
import {CryptoApiService} from './core/crypto-api.service';
import {CoinData} from './shared/models/api-data';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title: string;

  constructor(private titleService: Title) {}

  ngOnInit() { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
