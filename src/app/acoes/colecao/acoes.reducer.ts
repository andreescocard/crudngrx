//Reducer is a pure function, that gets invoked by the actions and then generates a new state in the store based on the action. 
import { createReducer } from "@ngrx/store";
import { Acoes } from "../colecao/acoes";
 
export const initialState: ReadonlyArray<Acoes> = [];
 
export const acoesReducer = createReducer(
    initialState
);