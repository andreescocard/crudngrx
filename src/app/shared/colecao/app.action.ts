import { createAction, props } from "@ngrx/store";
import { Appstate } from "./appstate";
 
export const setAPIStatus = createAction(
    '[API] success or failure status',
    props<{apiStatus: Appstate}>()
);
//Here created an action method that raised for API success or Failure message