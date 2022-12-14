//State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
import { createReducer, on } from '@ngrx/store';
import { Acoes } from './acoes';
import { 
  acoesFetchAPISuccess, 
  saveNewAcaoAPISucess, 
  updateAcaoAPISucess,
  deleteAcaoAPISuccess
} from './acoes.action';
 
export const initialState: ReadonlyArray<Acoes> = [];
 
export const acoesReducer = createReducer(
  initialState,
  on(acoesFetchAPISuccess, (state, { allAcoes }) => {
    return allAcoes;
  }),
  on(saveNewAcaoAPISucess, (state, { newAcao }) => {
    let newState = [...state]; //spread operator, all elements from array
    newState.unshift(newAcao);
    return newState;
  }),
  on(updateAcaoAPISucess, (state, { updateAcao }) => {
    let newState = state.filter((_) => _.id != updateAcao.id);
    newState.unshift(updateAcao);
    return newState;
  }),
  on(deleteAcaoAPISuccess, (state, { id }) => {
    let newState =state.filter((_) => _.id != id);
    return newState;
  })
);