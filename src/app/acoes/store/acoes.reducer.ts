//State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
import { createReducer, on } from '@ngrx/store';
import { Acoes } from './acoes.model';
import { AcoesActions } from './acoes.types';
 
export const initialState: ReadonlyArray<Acoes> = [];
 
export const acoesReducer = createReducer(
  initialState,
  on(AcoesActions.acoesFetchAPISuccess, (state, { allAcoes }) => {
    return allAcoes;
  }),
  on(AcoesActions.invokeSaveNewAcaoAPI, (state, { newAcao }) => {
    let newState = [...state];
    newState.unshift(newAcao);
    return newState;
  }),
  on(AcoesActions.invokeUpdateAcaoAPI, (state, { updateAcao }) => {
    let newState = state.filter((_) => _.id != updateAcao.id);
    newState.unshift(updateAcao);
    return newState;
  }),
  on(AcoesActions.invokeDeleteAcaoAPI, (state, { id }) => {
    let newState =state.filter((_) => _.id != id);
    return newState;
  })
);