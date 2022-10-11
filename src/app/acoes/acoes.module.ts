import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoesRoutingModule } from './acoes-routing.module';
import { HomeComponent } from './home/home.component';

import { StoreModule } from '@ngrx/store';
import { acoesReducer } from './colecao/acoes.reducer';
//Now register the reducer(eg: acoesReducer) and feature selector name(eg: 'myacoes') in the feature store module.

import { EffectsModule } from '@ngrx/effects';
import { AcoesEffect } from './colecao/acoes.effect';
//Now register our 'AcoesEffect' with 'EffectsModule' in 'acoes.module.ts'.

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
