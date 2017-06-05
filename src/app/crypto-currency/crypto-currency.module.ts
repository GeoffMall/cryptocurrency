import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import {CryptoCurrencyRoutingModule} from "./crypto-currency-routing.module";
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { CryptoCurrencyComponent } from './crypto-currency.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,

    CryptoCurrencyRoutingModule
  ],
  declarations: [
    SummaryComponent,
    BitcoinComponent,
    EthereumComponent,
    CryptoCurrencyComponent,
  ],
})
export class CryptoCurrencyModule { }
