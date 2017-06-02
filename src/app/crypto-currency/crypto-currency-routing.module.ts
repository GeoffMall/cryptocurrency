import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {CoinListComponent} from "./coin-list/coin-list.component";
import {CoinPriceComponent} from "./coin-price/coin-price.component";

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children:
      [
        { path: 'coin-list', component: CoinListComponent },
        { path: 'coin-price', component: CoinPriceComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoCurrencyRoutingModule { }
