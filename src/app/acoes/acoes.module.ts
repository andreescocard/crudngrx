import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoesRoutingModule } from './acoes-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AcoesRoutingModule
  ]
})
export class AcoesModule { }
