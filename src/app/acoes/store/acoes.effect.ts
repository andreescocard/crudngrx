/*
Effects isolate side effects from components, allowing for more pure components that select state and dispatch actions.
Effects are long-running services that listen to an observable of every action dispatched from the Store.
Effects filter those actions based on the type of action they are interested in. This is done by using an operator.
Effects perform tasks, which are synchronous or asynchronous and return a new action.
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom, catchError } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/colecao/app.action';
import { Appstate } from 'src/app/shared/colecao/appstate';
import { AcoesService } from '../acoes.service';
import { of } from 'rxjs';
import {
  acoesFetchAPISuccess,
  invokeAcoesAPI,
  invokeSaveNewAcaoAPI,
  saveNewAcaoAPISucess,
  updateAcaoAPISucess,
  invokeUpdateAcaoAPI,
  invokeDeleteAcaoAPI,
  deleteAcaoAPISuccess,
  LOADACOES,
  LOADACOESERROR,
} from './acoes.action';
import { selectAcoes } from './acoes.selector';
 
@Injectable()
export class AcoesEffect {
  constructor(
    private actions$: Actions,
    private acoesService: AcoesService,
    private store: Store,
    private appStore: Store<Appstate>
  ) {}
    /*
    loadAllAcoes$ - effect name listening to actions
    pipe() - call one or more functions that passes the result to next one
    ofType - filter action
    mergeMap - flattening opperator
    map - operator > Apply projection with each value from source.
     */
  loadAllAcoes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOADACOES),
      mergeMap(() => {
        return this.acoesService
          .get()
          .pipe(
            map((data) => acoesFetchAPISuccess({ allAcoes: data })),
            catchError(() => of({ type: LOADACOESERROR }))
          )
      })
    )
  );

   /*
    switchMap - flattening opperator with cancelling effect (avoid memory leaks)
    setAPIStatus - call app action
  this.acoesService.create - call service with API call to create acoes
     */

  saveNewAcao$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewAcaoAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.acoesService.create(action.newAcao).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewAcaoAPISucess({ newAcao: data });
          })
        );
      })
    );
  });

  updateAcaoAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeUpdateAcaoAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.acoesService.update(action.updateAcao).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return updateAcaoAPISucess({ updateAcao: data });
          })
        );
      })
    );
  });

  deleteBooksAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeDeleteAcaoAPI),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.acoesService.delete(actions.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return deleteAcaoAPISuccess({ id: actions.id });
          })
        );
      })
    );
  });

}
