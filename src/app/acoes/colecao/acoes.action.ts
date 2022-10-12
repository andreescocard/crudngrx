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