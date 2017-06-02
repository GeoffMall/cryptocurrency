import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListComponent } from './coin-list/coin-list.component';
import {CryptoCurrencyRoutingModule} from "./crypto-currency-routing.module";
import { LayoutComponent } from './layout/layout.component';
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";

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
  ],
})
export class CryptoCurrencyModule { }
