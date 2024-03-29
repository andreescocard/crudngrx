//Selectors are pure functions used to select, derive and compose pieces of state.
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Acoes } from './acoes.model';
 
export const selectAcoes = createFeatureSelector<Acoes[]>('myacoes');


  export const selectAcaoById = (acaoId: number) => createSelector(
    selectAcoes,
    acoes => acoes.filter((_) => _.id == acaoId)
);
