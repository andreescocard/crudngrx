//Reducer is a pure function, that gets invoked by the actions and then generates a new state in the store based on the action. 
import { createReducer, on } from '@ngrx/store';
import { Acoes } from './acoes';
import { acoesFetchAPISuccess } from './acoes.action';
 
export const initialState: ReadonlyArray<Acoes> = [];
 
export const acoesReducer = createReducer(
  initialState,
  on(acoesFetchAPISuccess, (state, { allAcoes }) => {
    return allAcoes;
  })
);