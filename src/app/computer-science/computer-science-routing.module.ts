import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComputerScienceComponent} from "./computer-science.component";
import {SummaryComponent} from "./summary/summary.component";
import {JavaComponent} from "./java/java.component";
import {TypescriptComponent} from "./typescript/typescript.component";

const routes: Routes = [
  {
    path: 'computer', component: ComputerScienceComponent,
    children: [
      {path: '', redirectTo: 'summary', pathMatch: 'full'},
      {path: 'summary', component: SummaryComponent},
      {path: 'java', component: JavaComponent},
      {path: 'typescript', component: TypescriptComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputerScienceRoutingModule { }
