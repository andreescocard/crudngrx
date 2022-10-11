//The 'createFeatureSelector' loads from the '@ngrx/store'. The 'createFeatureSelector' is used to fetch all the data from our feature module(eg: 'Acoes' module). Here the name of our selector 'myacoes' must be used to register the 'acoesReducer' into the 'acoes.module.ts' to register the feature store or child store.
import { createFeatureSelector } from '@ngrx/store';
import { Acoes } from './acoes';
 
export const selectAcoes = createFeatureSelector<Acoes[]>('myacoes');