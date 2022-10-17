//Reducer is a pure function, that gets invoked by the actions and then generates a new state in the store based on the action. 
import { createReducer, on } from '@ngrx/store';
import { Acoes } from './acoes';
import { acoesFetchAPISuccess, saveNewAcaoAPISucess } from './acoes.action';
 
export const initialState: ReadonlyArray<Acoes> = [];
 
export const acoesReducer = createReducer(
  initialState,
  on(acoesFetchAPISuccess, (state, { allAcoes }) => {
    return allAcoes;
  }),
  on(saveNewAcaoAPISucess, (state, { newAcao }) => {
    let newState = [...state];
    newState.unshift(newAcao);
    return newState;
  })
);