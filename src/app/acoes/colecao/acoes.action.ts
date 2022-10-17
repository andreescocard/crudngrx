//The 'Actions' represents the events raised by the component to communicate either with reducers or effects to update the data to store.
//ng generate class acoes/colecao/acoes.action
import { createAction, props } from '@ngrx/store';
import { Acoes } from './acoes';
 
export const invokeAcoesAPI = createAction(
  '[Acoes API] Invoke Acoes Fetch API'
);
 
export const acoesFetchAPISuccess = createAction(
  '[Acoes API] Fetch API Success',
  props<{ allAcoes: Acoes[] }>()
);

export const invokeSaveNewAcaoAPI = createAction(
  '[Acoes API] Inovke save new acao api',
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