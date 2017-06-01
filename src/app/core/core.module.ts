import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CryptoApiService} from './crypto-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CryptoApiService,
  ]
})
export class CoreModule { }
