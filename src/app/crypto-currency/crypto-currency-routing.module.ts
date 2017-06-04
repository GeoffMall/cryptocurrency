import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {CoinListComponent} from "./coin-list/coin-list.component";
import {BitcoinComponent} from "./bitcoin/bitcoin.component";

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children:
      [
        { path: '', redirectTo: 'coin-list', pathMatch: 'full'},
        { path: 'coin-list', component: CoinListComponent },
        { path: 'bitcoin', component: BitcoinComponent },

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoCurrencyRoutingModule { }
