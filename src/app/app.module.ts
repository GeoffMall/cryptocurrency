import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from "./shared/shared.module";
import {MaterialModule} from "./material/material.module";
import {AppRoutingModule} from "./app-routing.module";
import {CryptoCurrencyModule} from "./crypto-currency/crypto-currency.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    MaterialModule,
    CoreModule,
    SharedModule,

    CryptoCurrencyModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
