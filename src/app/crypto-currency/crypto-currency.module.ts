import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListComponent } from './coin-list/coin-list.component';
import {CryptoCurrencyRoutingModule} from "./crypto-currency-routing.module";
import { LayoutComponent } from './layout/layout.component';
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import {ChartsModule} from "ng2-charts";
import { BitcoinComponent } from './bitcoin/bitcoin.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,

    CryptoCurrencyRoutingModule
  ],
  declarations: [
    LayoutComponent,
    CoinListComponent,
    BitcoinComponent,
  ],
})
export class CryptoCurrencyModule { }
