import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListComponent } from './coin-list/coin-list.component';
import {CryptoCurrencyRoutingModule} from "./crypto-currency-routing.module";
import { LayoutComponent } from './layout/layout.component';
import {MaterialModule} from "../material/material.module";
import {Md2Module} from "md2";
import {SharedModule} from "../shared/shared.module";
import { CoinPriceComponent } from './coin-price/coin-price.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Md2Module,
    SharedModule,
    CryptoCurrencyRoutingModule
  ],
  declarations: [
    CoinListComponent,
    LayoutComponent,
    CoinPriceComponent
  ]
})
export class CryptoCurrencyModule { }
