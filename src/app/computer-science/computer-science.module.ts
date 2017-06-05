import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputerScienceRoutingModule } from './computer-science-routing.module';
import { ComputerScienceComponent } from './computer-science.component';
import { SummaryComponent } from './summary/summary.component';
import { JavaComponent } from './java/java.component';
import { TypescriptComponent } from './typescript/typescript.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,

    ComputerScienceRoutingModule
  ],
  declarations: [
    ComputerScienceComponent,
    SummaryComponent,
    JavaComponent,
    TypescriptComponent
  ]
})
export class ComputerScienceModule { }
