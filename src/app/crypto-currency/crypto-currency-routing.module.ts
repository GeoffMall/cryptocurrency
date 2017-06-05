import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryComponent} from "./summary/summary.component";
import {BitcoinComponent} from "./bitcoin/bitcoin.component";
import {EthereumComponent} from "./ethereum/ethereum.component";
import {CryptoCurrencyComponent} from "./crypto-currency.component";

const routes: Routes = [
  { path: 'crypto', component: CryptoCurrencyComponent,
    children:
    [
      { path: '', redirectTo: 'summary', pathMatch: 'full'},
      { path: 'summary', component: SummaryComponent },
      { path: 'bitcoin', component: BitcoinComponent },
      { path: 'ethereum', component: EthereumComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoCurrencyRoutingModule { }
