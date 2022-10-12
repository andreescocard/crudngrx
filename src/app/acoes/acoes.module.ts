import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoesRoutingModule } from './acoes-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { acoesReducer } from './colecao/acoes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AcoesEffect } from './colecao/acoes.effect';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AcoesRoutingModule,
    StoreModule.forFeature('myacoes', acoesReducer),
    EffectsModule.forFeature([AcoesEffect])
  ]
})
export class AcoesModule { }
