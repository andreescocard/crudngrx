//Actions describe unique events that are dispatched from components and services.
import { createAction, props } from '@ngrx/store';
import { Acoes } from './acoes';
 
export const LOADACOES = '[Acoes API] Invoke Acoes Fetch API';
export const LOADACOESSUCCESS = '[Acoes API] Fetch API Success';
export const LOADACOESERROR = '[Acoes API] Error Fetching API';
export const SAVEACOES = '[Acoes API] Inovke save new acao api';
export const SAVEACOESSUCCESS = '[Acoes API] save new acao api success';
export const UPDATEACOES = '[Acoes API] Invoke update acao api';
export const UPDATEACOESSUCCESS = '[Acoes API] update  acao api success';
export const DELETEACOES = '[Acoes API] Inovke delete acao api';
export const DELETEACOESSUCCESS = '[Acoes API] deleted acao api success';

export const invokeAcoesAPI = createAction(
  LOADACOES
);

export const invokeAcoesErrorAPI = createAction(
  LOADACOESERROR
);
 
export const acoesFetchAPISuccess = createAction(
  LOADACOESSUCCESS,
  props<{ allAcoes: Acoes[] }>()
);

export const invokeSaveNewAcaoAPI = createAction(
  SAVEACOES,
  props<{ newAcao: Acoes }>()
);
 
export const saveNewAcaoAPISucess = createAction(
  SAVEACOESSUCCESS,
  props<{ newAcao: Acoes }>()
);

export const invokeUpdateAcaoAPI = createAction(
  UPDATEACOES,
  props<{ updateAcao: Acoes }>()
);
 
export const updateAcaoAPISucess = createAction(
  UPDATEACOESSUCCESS,
  props<{ updateAcao: Acoes }>()
);

export const invokeDeleteAcaoAPI = createAction(
  DELETEACOES,
  props<{id:number}>()
);
 
export const deleteAcaoAPISuccess = createAction(
  DELETEACOESSUCCESS,
  props<{id:number}>()
);