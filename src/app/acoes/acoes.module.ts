import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoesRoutingModule } from './acoes-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { acoesReducer } from './store/acoes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AcoesEffect } from './store/acoes.effect';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AcoesRoutingModule,
    StoreModule.forFeature('myacoes', acoesReducer),
    EffectsModule.forFeature([AcoesEffect])
  ]
})
export class AcoesModule { }
