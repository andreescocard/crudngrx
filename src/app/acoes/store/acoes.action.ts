//Actions describe unique events that are dispatched from components and services.
import { createAction, props } from '@ngrx/store';
import { Acoes } from './acoes.model';
 
export const LOADACOES = '[Acoes API] Invoke Acoes Fetch API';
export const LOADACOESSUCCESS = '[Acoes API] Fetch API Success';
export const SAVEACOES = '[Acoes API] Invoke save new acao api';
export const UPDATEACOES = '[Acoes API] Invoke update acao api';
export const DELETEACOES = '[Acoes API] Invoke delete acao api';

export const invokeAcoesAPI = createAction(
  LOADACOES
);
 
export const acoesFetchAPISuccess = createAction(
  LOADACOESSUCCESS,
  props<{ allAcoes: Acoes[] }>()
);

export const invokeSaveNewAcaoAPI = createAction(
  SAVEACOES,
  props<{ newAcao: Acoes }>()
);


export const invokeUpdateAcaoAPI = createAction(
  UPDATEACOES,
  props<{ updateAcao: Acoes }>()
);
 

export const invokeDeleteAcaoAPI = createAction(
  DELETEACOES,
  props<{id:number}>()
);
 