import { createAction, props } from '@ngrx/store';
import { Acoes } from './acoes';
 
export const LOADACOES = '[Acoes API] Invoke Acoes Fetch API';
export const LOADACOESSUCCESS = '[Acoes API] Fetch API Success';
export const SAVEACOES = '[Acoes API] Inovke save new acao api';

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
 
export const saveNewAcaoAPISucess = createAction(
  '[Acoes API] save new acao api success',
  props<{ newAcao: Acoes }>()
);

export const invokeUpdateAcaoAPI = createAction(
  '[Acoes API] Invoke update acao api',
  props<{ updateAcao: Acoes }>()
);
 
export const updateAcaoAPISucess = createAction(
  '[Acoes API] update  acao api success',
  props<{ updateAcao: Acoes }>()
);

export const invokeDeleteAcaoAPI = createAction(
  '[Acoes API] Inovke delete acao api',
  props<{id:number}>()
);
 
export const deleteAcaoAPISuccess = createAction(
  '[Acoes API] deleted acao api success',
  props<{id:number}>()
);