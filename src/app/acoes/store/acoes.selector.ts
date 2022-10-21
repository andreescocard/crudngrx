import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Acoes } from './acoes';
 
export const selectAcoes = createFeatureSelector<Acoes[]>('myacoes');

export const selectAcaoById = (acaoId: number) =>
  createSelector(selectAcoes, (acoes: Acoes[]) => {
    var acaobyId = acoes.filter((_) => _.id == acaoId);
    if (acaobyId.length == 0) {
      return null;
    }
    return acaobyId[0];
  });