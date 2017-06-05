import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'crypto', loadChildren: 'app/crypto-currency/crypto-currency.module#CryptoCurrencyModule' },
  { path: 'computer', loadChildren: 'app/computer-science/computer-science.module#ComputerScienceModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
